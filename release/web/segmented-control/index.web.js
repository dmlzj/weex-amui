!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=284)}({0:function(e,t){e.exports=function(e,t,n,a,r){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),a&&(c._scopeId=a);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):n&&(l=n),l){var u=c.functional,d=u?c.render:c.beforeCreate;u?c.render=function(e,t){return l.call(t),d(e,t)}:c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:i,exports:o,options:c}}},1:function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=a(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function a(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var a=n(t,e);return t[2]?"@media "+t[2]+"{"+a+"}":a}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(a[i]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&a[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},10:function(e,t,n){function a(e){n(11)}var r=n(0)(n(13),n(19),a,"data-v-0c7fa168",null);e.exports=r.exports},11:function(e,t,n){var a=n(12);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(2)("685b3db0",a,!0,{})},12:function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".am-nav-bar[data-v-0c7fa168]{align-items:stretch;height:1.2rem;background-color:#108ee9;flex-direction:row}.am-nav-bar-left[data-v-0c7fa168],.am-nav-bar-right[data-v-0c7fa168]{flex:1;align-items:stretch;flex-direction:row}.am-nav-bar-title[data-v-0c7fa168]{flex:2;text-align:center;align-self:center;font-size:.48rem;white-space:nowrap;color:#fff}.am-nav-bar-right[data-v-0c7fa168]{justify-content:flex-end}.am-nav-bar-btn[data-v-0c7fa168]{min-width:1.2rem;padding-left:.30667rem;padding-right:.30667rem;align-items:center;justify-content:center}.am-nav-bar-btn[data-v-0c7fa168]:active{background-color:#0e80d2}.am-nav-bar-btn-icon[data-v-0c7fa168]{color:#fff}.am-nav-bar-btn-text[data-v-0c7fa168]{font-size:.42667rem;color:#fff}.am-nav-bar-light[data-v-0c7fa168]{background-color:#fff}.am-nav-bar-light-title[data-v-0c7fa168]{color:#000}.am-nav-bar-light-btn[data-v-0c7fa168]:active{background-color:#ddd}.am-nav-bar-light-btn-icon[data-v-0c7fa168],.am-nav-bar-light-btn-text[data-v-0c7fa168]{color:#108ee9}",""])},13:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=a(r),o=weex.requireModule("navigator");t.default={name:"am-nav-bar",props:{mode:{type:String,default:"dark"},title:{type:String,default:null},leftBtn:{type:Array,default:function(){return[{is:"icon",type:"left",onClick:function(){o.pop({},function(e){})}}]}},rightBtn:{type:Array,default:function(){return[]}}},components:{AmIcon:i.default},computed:{navBarClass:function(){return["am-nav-bar-"+this.mode]},titleClass:function(){return["am-nav-bar-"+this.mode+"-title"]},left:function(){return this.makeBtn(this.leftBtn)},right:function(){return this.makeBtn(this.rightBtn)}},methods:{makeBtn:function(e){return e.map(function(e){var t=e;return"string"==typeof e&&(t={is:"icon",type:e}),t})},handleClick:function(e){"function"==typeof e.onClick?e.onClick():this.$emit("click",e.key||e.type||e.text||e.src)}}}},14:function(e,t,n){function a(e){n(15)}var r=n(0)(n(17),n(18),a,"data-v-17fad368",null);e.exports=r.exports},15:function(e,t,n){var a=n(16);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(2)("5c8f2aee",a,!0,{})},16:function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".am-icon-xxs[data-v-17fad368]{font-size:.4rem;line-height:.4rem}.am-icon-xs[data-v-17fad368]{font-size:.48rem;line-height:.48rem}.am-icon-sm[data-v-17fad368]{font-size:.56rem;line-height:.56rem}.am-icon-md[data-v-17fad368]{font-size:.58667rem;line-height:.58667rem}.am-icon-lg[data-v-17fad368]{font-size:.96rem;line-height:.96rem}",""])},17:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),i=a(r),o=weex.requireModule("dom");t.default={name:"am-icon",props:{type:{type:String,default:null},size:{type:[String,Number],default:"md"},color:{type:String,default:null},fontFamily:{type:String,default:"AMUIIconFont"}},data:function(){return{Icon:i.default}},computed:{iconClass:function(){return isNaN(this.size)?["am-icon-"+this.size]:null},iconStyle:function(){var e={color:this.color,fontFamily:this.fontFamily};return isNaN(this.size)||(e.fontSize=this.size+"px",e.lineHeight=this.size+"px"),e}},beforeCreate:function(){o.addRule("fontFace",{fontFamily:"AMUIIconFont",src:"url('https://at.alicdn.com/t/font_666184_6i47o5l7pbiysyvi.ttf')"})}}},172:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(173);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},173:function(e,t,n){function a(e){n(174)}var r=n(0)(n(176),n(177),a,"data-v-a073f976",null);e.exports=r.exports},174:function(e,t,n){var a=n(175);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(2)("11cdeb90",a,!0,{})},175:function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".am-segment[data-v-a073f976]{flex-direction:row;height:.72rem;opacity:1}.am-segment-disabled[data-v-a073f976]{opacity:.5}.am-segment-item[data-v-a073f976]{flex:1;text-align:center;color:#108ee9;font-size:.37333rem;line-height:.72rem;border-color:#108ee9;border-right-width:1px;border-bottom-width:1px;border-top-width:1px}.am-segment-item-first[data-v-a073f976]{border-left-width:1px;border-top-left-radius:.13333rem;border-bottom-left-radius:.13333rem}.am-segment-item-last[data-v-a073f976]{border-top-right-radius:.13333rem;border-bottom-right-radius:.13333rem}.am-segment-item-selected[data-v-a073f976]{background-color:#108ee9;color:#fff}",""])},176:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=a(r);t.default={name:"am-segmented-control",model:{prop:"selected",event:"change"},props:{values:{type:Array,default:function(){return[]}},selected:{type:Number,default:0},disabled:{type:Boolean,default:!1},tintColor:{type:String,default:null}},computed:{segmentClass:function(){return i.default.makeClassList({"am-segment":!0,"am-segment-disabled":this.disabled})}},methods:{getItemClass:function(e){return i.default.makeClassList({"am-segment-item":!0,"am-segment-item-first":0===e,"am-segment-item-last":e===this.values.length-1,"am-segment-item-selected":this.selected===e})},getSegmentItemStyle:function(e){var t={};return this.tintColor&&(t.borderColor=this.tintColor,this.selected===e?(t.backgroundColor=this.tintColor,t.color="#ffffff"):t.color=this.tintColor),t},handleClick:function(e,t){this.disabled||this.$emit("change",e,t)}}}},177:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" weex-ct weex-div",class:e.segmentClass,attrs:{"weex-type":"div"}},e._l(e.values,function(t,a){return n("p",{key:a,staticClass:" weex-el weex-text",class:e.getItemClass(a),style:e._processExclusiveStyle(e.getSegmentItemStyle(a),75,"text"),attrs:{"weex-type":"text","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(n){n.stopPropagation(),e.handleClick(a,t)}}},[e._v(e._s(t))])}))},staticRenderFns:[]}},18:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.type?n("p",{staticClass:"am-icon weex-el weex-text",class:e.iconClass,style:e._processExclusiveStyle(e.iconStyle,75,"text"),attrs:{"weex-type":"text"}},[e._v(e._s(e.Icon[e.type]||e.type))]):e._e()},staticRenderFns:[]}},19:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" weex-ct weex-div",class:["am-nav-bar","am-nav-bar-"+e.mode],attrs:{"weex-type":"div"}},[n("div",{staticClass:"am-nav-bar-left weex-ct weex-div",attrs:{"weex-type":"div"}},[e._t("left",e._l(e.left,function(t,a){return n("div",{key:a,staticClass:" weex-ct weex-div",class:["am-nav-bar-btn","am-nav-bar-"+e.mode+"-btn"],attrs:{"weex-type":"div","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(n){n.stopPropagation(),e.handleClick(t)}}},["icon"===t.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+e.mode+"-btn-icon"],attrs:{type:t.type}}):"text"===t.is?n("p",{staticClass:" weex-el weex-text",class:["am-nav-bar-btn-text","am-nav-bar-"+e.mode+"-btn-text"],attrs:{"weex-type":"text"}},[e._v(e._s(t.text))]):e._e()],1)}),{})],2),e._v(" "),e._t("title",[n("p",{staticClass:" weex-el weex-text",class:["am-nav-bar-title","am-nav-bar-"+e.mode+"-title"],attrs:{"weex-type":"text","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(t){t.stopPropagation(),e.handleClick({key:"title"})}}},[e._v(e._s(e.title))])],{}),e._v(" "),n("div",{staticClass:"am-nav-bar-right weex-ct weex-div",attrs:{"weex-type":"div"}},[e._t("right",e._l(e.right,function(t,a){return n("div",{key:a,staticClass:" weex-ct weex-div",class:["am-nav-bar-btn","am-nav-bar-"+e.mode+"-btn"],attrs:{"weex-type":"div","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(n){n.stopPropagation(),e.handleClick(t)}}},["icon"===t.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+e.mode+"-btn-icon"],attrs:{type:t.type}}):"text"===t.is?n("p",{staticClass:" weex-el weex-text",class:["am-nav-bar-btn-text","am-nav-bar-"+e.mode+"-btn-text"],attrs:{"weex-type":"text"}},[e._v(e._s(t.text))]):e._e()],1)}),{})],2)],2)},staticRenderFns:[]}},2:function(e,t,n){function a(e){for(var t=0;t<e.length;t++){var n=e[t],a=u[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(i(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var o=[],r=0;r<n.parts.length;r++)o.push(i(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:o}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,a=document.querySelector("style["+h+'~="'+e.id+'"]');if(a){if(p)return v;a.parentNode.removeChild(a)}if(b){var i=m++;a=f||(f=r()),t=o.bind(null,a,i,!1),n=o.bind(null,a,i,!0)}else a=r(),t=s.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}function o(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var n=t.css,a=t.media,r=t.sourceMap;if(a&&e.setAttribute("media",a),g.ssrId&&e.setAttribute(h,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(9),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,m=0,p=!1,v=function(){},g=null,h="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){p=n,g=r||{};var i=l(e,t);return a(i),function(t){for(var n=[],r=0;r<i.length;r++){var o=i[r],s=u[o.id];s.refs--,n.push(s)}t?(i=l(e,t),a(i)):i=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},284:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(7),i=a(r);a(n(8)).default.init(i.default);var o=n(285);new i.default(i.default.util.extend({el:"#root"},o))},285:function(e,t,n){function a(e){n(286)}var r=n(0)(n(288),n(289),a,"data-v-4df64f42",null);e.exports=r.exports},286:function(e,t,n){var a=n(287);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(2)("34fb5cff",a,!0,{})},287:function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".demo[data-v-4df64f42]{background-color:#f5f5f9}",""])},288:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(45),i=a(r),o=n(39),s=a(o),c=n(172),l=a(c),u=n(5),d=a(u),f=weex.requireModule("modal");t.default={components:{AmNavBar:d.default,AmSegmentedControl:l.default,AmWhiteSpace:s.default,AmWingBlank:i.default},data:function(){return{selected:0}},methods:{change:function(e,t){f.toast({message:"index:"+e+",value:"+t})}}}},289:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo weex-ct weex-div",attrs:{"weex-type":"div"}},[n("am-nav-bar",{attrs:{title:"分段器"}}),e._v(" "),n("scroller",[n("am-wing-blank",[n("am-white-space"),e._v(" "),n("am-segmented-control",{attrs:{values:["Segment1","Segment2","Segment3"]},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),n("am-wing-blank",[n("am-white-space"),e._v(" "),n("am-segmented-control",{attrs:{disabled:"",values:["Segment1","Segment2","Segment3"]},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),n("am-wing-blank",[n("am-white-space"),e._v(" "),n("am-segmented-control",{attrs:{"tint-color":"#ff0000",values:["Segment1","Segment2","Segment3"]},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),n("am-wing-blank",[n("am-white-space"),e._v(" "),n("am-segmented-control",{style:{width:e._px2rem("500px",75)},attrs:{values:["Segment1","Segment2","Segment3"]},on:{change:e.change},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)],1)},staticRenderFns:[]}},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.prototype.toString,i={isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":a(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return i.env.isWeb()?"undefined"!=typeof window&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):i.env.isIOS()&&2436===e},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isPlainObject:function(e){return"[object Object]"===r.call(e)},makeClassList:function(e){return this.isWeb()||Array.isArray(e)?e:Object.keys(e).filter(function(t){return e[t]})}};t.default=i},39:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(40);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},4:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},40:function(e,t,n){function a(e){n(41)}var r=n(0)(n(43),n(44),a,"data-v-1bfe0605",null);e.exports=r.exports},41:function(e,t,n){var a=n(42);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(2)("584a5d5a",a,!0,{})},42:function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".am-white-space-xs[data-v-1bfe0605]{height:.08rem}.am-white-space-sm[data-v-1bfe0605]{height:.16rem}.am-white-space-md[data-v-1bfe0605]{height:.24rem}.am-white-space-lg[data-v-1bfe0605]{height:.4rem}.am-white-space-xl[data-v-1bfe0605]{height:.56rem}",""])},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"am-white-space",props:{size:{type:String,default:"md"}}}},44:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:" weex-ct weex-div",class:["am-white-space-"+e.size],attrs:{"weex-type":"div"}})},staticRenderFns:[]}},45:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(46);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},46:function(e,t,n){function a(e){n(47)}var r=n(0)(n(49),n(50),a,"data-v-e98a94b6",null);e.exports=r.exports},47:function(e,t,n){var a=n(48);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(2)("f9f032be",a,!0,{})},48:function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".am-wing-blank-sm[data-v-e98a94b6]{margin-left:.13333rem;margin-right:.13333rem}.am-wing-blank-md[data-v-e98a94b6]{margin-left:.21333rem;margin-right:.21333rem}.am-wing-blank-lg[data-v-e98a94b6]{margin-left:.4rem;margin-right:.4rem}",""])},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"am-wing-blank",props:{size:{type:String,default:"lg"}}}},5:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},50:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:" weex-ct weex-div",class:["am-wing-blank-"+e.size],attrs:{"weex-type":"div"}},[e._t("default",null,{})],2)},staticRenderFns:[]}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={search:"",reload:"","arrow-down":"","arrow-up":"","arrow-right":"","arrow-left":"",down:"",up:"",right:"",left:"","warning-circle":"","warning-circle-o":"","close-circle":"","close-circle-o":"","check-circle":"","check-circle-o":"",check:"","clock-circle":"","clock-circle-o":"",ellipsis:"",loading:""};t.default=a},7:function(e,t){e.exports=Vue},8:function(e,t){e.exports=weex},9:function(e,t){e.exports=function(e,t){for(var n=[],a={},r=0;r<t.length;r++){var i=t[r],o=i[0],s=i[1],c=i[2],l=i[3],u={id:e+":"+r,css:s,media:c,sourceMap:l};a[o]?a[o].parts.push(u):n.push(a[o]={id:o,parts:[u]})}return n}}});
//# sourceMappingURL=index.web.js.map