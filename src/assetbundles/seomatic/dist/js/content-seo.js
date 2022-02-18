/*!
 * @project        seomatic
 * @name           content-seo.js
 * @author         Andrew Welch
 * @build          Fri Feb 18 2022 21:06:31 GMT+0000 (Coordinated Universal Time)
 * @copyright      Copyright (c) 2022 ©2020 nystudio107.com
 *
 */
"use strict";(self.webpackChunkseomatic=self.webpackChunkseomatic||[]).push([[924],{2733:function(t,e,a){var n=a(7495),i=(a(9653),a(2222),[{name:"__component:content-seo-url",sortField:"sourceName",title:"Name",titleClass:"text-left",dataClass:"text-left"},{name:"entries",title:"Entries",titleClass:"text-center",dataClass:"text-center"},{name:"sourceType",sortField:"sourceType",title:"Type",titleClass:"text-left",dataClass:"text-left"},{name:"title",title:"Title",titleClass:"text-center",dataClass:"text-center",callback:"settingFormatter"},{name:"description",title:"Description",titleClass:"text-center",dataClass:"text-center",callback:"settingFormatter"},{name:"image",title:"Image",titleClass:"text-center",dataClass:"text-center",callback:"settingFormatter"},{name:"sitemap",title:"Sitemap",titleClass:"text-center",dataClass:"text-center",callback:"settingFormatter"},{name:"robots",title:"Robots",titleClass:"text-center",dataClass:"text-center"}]),s={props:{rowData:{type:Object,required:!0},rowIndex:{type:Number}},computed:{linkTitle:function(){var t="";return t+=this.rowData.sourceName}}},l=a(1900),o=(0,l.Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"status",style:{backgroundColor:t.rowData.setup.color},attrs:{title:"Setup Grade: "+t.rowData.setup.name}}),t._v(" "),a("a",{staticClass:"go",attrs:{href:t.rowData.contentSeoUrl,title:t.linkTitle}},[t._v(t._s(t.rowData.sourceName))])])}),[],!1,null,null,null).exports,r=a(6545),c={props:{css:{type:Object,default:function(){return{wrapperClass:"vuetable pagination float-right py-4",activeClass:"active large",disabledClass:"disabled",pageClass:"item btn",linkClass:"item btn",paginationClass:"ui bottom attached segment grid",paginationInfoClass:"left floated left aligned six wide column",dropdownClass:"ui search dropdown",icons:{first:"",prev:"",next:"",last:""}}}},onEachSide:{type:Number,default:function(){return 2}}},data:function(){return{eventPrefix:"vuetable-pagination:",tablePagination:null}},computed:{totalPage:function(){return null===this.tablePagination?0:this.tablePagination.last_page},isOnFirstPage:function(){return null!==this.tablePagination&&1===this.tablePagination.current_page},isOnLastPage:function(){return null!==this.tablePagination&&this.tablePagination.current_page===this.tablePagination.last_page},notEnoughPages:function(){return this.totalPage<2*this.onEachSide+4},windowSize:function(){return 2*this.onEachSide+1},windowStart:function(){return!this.tablePagination||this.tablePagination.current_page<=this.onEachSide?1:this.tablePagination.current_page>=this.totalPage-this.onEachSide?this.totalPage-2*this.onEachSide:this.tablePagination.current_page-this.onEachSide}},methods:{loadPage:function(t){this.$emit(this.eventPrefix+"change-page",t)},isCurrentPage:function(t){return t===this.tablePagination.current_page},setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},u={mixins:[(0,l.Z)(c,undefined,undefined,!1,null,null,null).exports]},f=(0,l.Z)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.tablePagination&&t.tablePagination.last_page>1,expression:"tablePagination && tablePagination.last_page > 1"}],class:t.css.wrapperClass},[a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage(1)}}},[""!=t.css.icons.first?a("i",{class:[t.css.icons.first]}):a("span",[t._v("«")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage("prev")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.prev]}):a("span",[t._v(" ‹")])]),t._v(" "),t.notEnoughPages?[t._l(t.totalPage,(function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(e)?t.css.activeClass:""],domProps:{innerHTML:t._s(e)},on:{click:function(a){return t.loadPage(e)}}})]}))]:[t._l(t.windowSize,(function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(t.windowStart+e-1)?t.css.activeClass:""],domProps:{innerHTML:t._s(t.windowStart+e-1)},on:{click:function(a){return t.loadPage(t.windowStart+e-1)}}})]}))],t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage("next")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.next]}):a("span",[t._v("› ")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage(t.totalPage)}}},[""!=t.css.icons.last?a("i",{class:[t.css.icons.last]}):a("span",[t._v("»")])])],2)}),[],!1,null,null,null).exports,g=(a(4916),a(5306),{props:{css:{type:Object,default:function(){return{infoClass:"left floated left py-5 text-gray-600"}}},infoTemplate:{type:String,default:function(){return"Displaying {from} to {to} of {total} items"}},noDataTemplate:{type:String,default:function(){return"No relevant data"}}},data:function(){return{tablePagination:null}},computed:{paginationInfo:function(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}}),p={mixins:[(0,l.Z)(g,undefined,undefined,!1,null,null,null).exports]},d=(0,l.Z)(p,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["vuetable-pagination-info",t.css.infoClass],domProps:{innerHTML:t._s(t.paginationInfo)}})}),[],!1,null,null,null).exports,h={data:function(){return{filterText:""}},methods:{doFilter:function(){this.$events.fire("filter-set",this.filterText)},resetFilter:function(){this.filterText="",this.$events.fire("filter-reset")}}},v=(0,l.Z)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-bar"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"inline field"},[a("label",{staticClass:"text-gray-600"},[t._v("Search for:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],staticClass:"text nicetext",attrs:{type:"text",placeholder:""},domProps:{value:t.filterText},on:{keyup:t.doFilter,input:function(e){e.target.composing||(t.filterText=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn delete icon",on:{click:t.resetFilter}},[t._v("Reset")])])])])}),[],!1,null,null,null).exports;Vue.component("content-seo-url",o);var b={components:{vuetable:r.Z,"vuetable-pagination":f,"vuetable-pagination-info":d,"vuetable-filter-bar":v},props:{siteId:{type:Number,default:0},apiUrl:{type:String,default:""},refreshIntervalSecs:{type:Number,default:0}},data:function(){return{moreParams:{siteId:this.siteId},css:{tableClass:"data fullwidth seomatic-content-seo",ascendingIcon:"menubtn seomatic-menubtn-asc",descendingIcon:"menubtn seomatic-menubtn-desc"},sortOrder:[{field:"__component:content-seo-url",sortField:"sourceName",direction:"asc"}],fields:i}},mounted:function(){var t=this;this.$events.$on("filter-set",(function(e){return t.onFilterSet(e)})),this.$events.$on("filter-reset",(function(e){return t.onFilterReset()})),this.refreshIntervalSecs&&setInterval((function(){void 0!==t.$refs.pagination&&t.$refs.pagination.isOnFirstPage&&void 0!==t.$refs.vuetable&&t.$refs.vuetable.refresh()}),1e3*this.refreshIntervalSecs)},methods:{onFilterSet:function(t){this.moreParams={siteId:this.siteId,filter:t},this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset:function(){this.moreParams={siteId:this.siteId},this.$events.fire("refresh-table",this.$refs.vuetable)},onPaginationData:function(t){this.$refs.paginationTop.setPaginationData(t),this.$refs.paginationInfoTop.setPaginationData(t),this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage:function(t){this.$refs.vuetable.changePage(t)},urlFormatter:function(t){return""===t?"":'\n            <a class="go" href="'.concat(t,'" title="').concat(t,'" target="_blank" rel="noopener">').concat(t,"</a>\n            ")},settingFormatter:function(t){return"\n            <span class='status ".concat(t," inline-item'></span>\n            ")}}},m=(0,l.Z)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4"},[a("vuetable-filter-bar"),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfoTop"}),t._v(" "),a("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":t.onChangePage}})],1),t._v(" "),a("vuetable",{ref:"vuetable",attrs:{"api-url":t.apiUrl,"per-page":20,fields:t.fields,css:t.css,"sort-order":t.sortOrder,"append-params":t.moreParams},on:{"vuetable:pagination-data":t.onPaginationData}}),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfo"}),t._v(" "),a("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":t.onChangePage}})],1)],1)}),[],!1,null,null,null).exports;Vue.use(n.Z);new Vue({el:"#cp-nav-content",components:{"content-seo-table":m},data:{},methods:{onTableRefresh:function(t){Vue.nextTick((function(){return t.refresh()}))}},mounted:function(){var t=this;this.$events.$on("refresh-table",(function(e){return t.onTableRefresh(e)}))}})}},function(t){t.O(0,[216],(function(){return e=2733,t(t.s=e);var e}));t.O()}]);
//# sourceMappingURL=content-seo.js.map