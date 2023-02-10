<?php
/**
 * SEOmatic plugin for Craft CMS 3.x
 *
 * A turnkey SEO implementation for Craft CMS that is comprehensive, powerful,
 * and flexible
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2017 nystudio107
 */

namespace nystudio107\seomatic\models;

use Craft;
use nystudio107\seomatic\base\NonceContainer;
use nystudio107\seomatic\helpers\ImageTransform as ImageTransformHelper;
use nystudio107\seomatic\helpers\MetaValue as MetaValueHelper;
use nystudio107\seomatic\Seomatic;
use yii\caching\TagDependency;
use yii\web\View;

/**
 * @author    nystudio107
 * @package   Seomatic
 * @since     3.0.0
 */
class MetaJsonLdContainer extends NonceContainer
{
    // Constants
    // =========================================================================

    const CONTAINER_TYPE = 'MetaJsonLdContainer';

    // Public Properties
    // =========================================================================

    /**
     * The data in this container
     *
     * @var MetaJsonLd[] $data
     */
    public $data = [];

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function includeMetaData($dependency)
    {
        Craft::beginProfile('MetaJsonLdContainer::includeMetaData', __METHOD__);
        $uniqueKey = $this->handle . $dependency->tags[3];
        $cache = Craft::$app->getCache();
        if ($this->clearCache) {
            TagDependency::invalidate($cache, $dependency->tags[3]);
        }
        $tagData = $cache->getOrSet(
            self::CONTAINER_TYPE . $uniqueKey,
            function () use ($uniqueKey) {
                Craft::info(
                    self::CONTAINER_TYPE . ' cache miss: ' . $uniqueKey,
                    __METHOD__
                );
                $tagData = [];
                if ($this->prepForInclusion()) {
                    /** @var $metaJsonLdModel MetaJsonLd */
                    foreach ($this->data as $metaJsonLdModel) {
                        if ($metaJsonLdModel->include) {
                            $options = $metaJsonLdModel->tagAttributes();
                            if ($metaJsonLdModel->prepForRender($options)) {
                                $jsonLd = $metaJsonLdModel->render([
                                    'renderRaw' => true,
                                    'renderScriptTags' => false,
                                    'array' => false,
                                ]);
                                $tagData[] = [
                                    'jsonLd' => $metaJsonLdModel,
                                    'position' => View::POS_END
                                ];
                                // If `devMode` is enabled, validate the JSON-LD and output any model errors
                                if (Seomatic::$devMode) {
                                    $metaJsonLdModel->debugMetaItem(
                                        'JSON-LD property: ',
                                        [
                                            'default' => 'error',
                                            'google' => 'warning',
                                        ]
                                    );
                                }
                            }
                        }
                    }
                }

                return $tagData;
            },
            Seomatic::$cacheDuration,
            $dependency
        );
        // Invalidate the cache we just created if there were pending image transforms in it
        if (ImageTransformHelper::$pendingImageTransforms) {
            TagDependency::invalidate($cache, $dependency->tags[3]);
        }
        // Create a root JSON-LD object
        $jsonLdGraph = MetaJsonLd::create('jsonLd', [
            'graph' => [],
        ]);
        $jsonLdGraph->type = null;
        // Add the JSON-LD objects to our root JSON-LD's graph
        $cspNonce = null;
        foreach ($tagData as $config) {
            $jsonLdGraph->graph[] = $config['jsonLd'];
            if (!empty($config['jsonLd']->nonce)) {
                $cspNonce = $config['jsonLd']->nonce;
            }
        }
        // Render the JSON-LD object
        $jsonLd = $jsonLdGraph->render([
            'renderRaw' => true,
            'renderScriptTags' => false,
            'array' => false,
        ]);

        // Register the tags
        $attrs = ['type' => 'application/ld+json'];
        if (!empty($cspNonce)) {
            $attrs = array_merge($attrs, [
                'nonce' => $cspNonce,
            ]);
        }
        Seomatic::$view->registerScript(
            $jsonLd,
            View::POS_END,
            $attrs
        );
        Craft::endProfile('MetaJsonLdContainer::includeMetaData', __METHOD__);
    }

    /**
     * @inheritdoc
     */
    public function normalizeContainerData()
    {
        parent::normalizeContainerData();

        foreach ($this->data as $key => $config) {
            $schemaType = $config['type'] ?? $config['@type'];
            $config['key'] = $key;
            $schemaType = MetaValueHelper::parseString($schemaType);
            $jsonLd = MetaJsonLd::create($schemaType, $config);
            // Retain the intended type
            $jsonLd->type = $config['type'] ?? $config['@type'];
            $this->data[$key] = $jsonLd;
        }
    }
}
