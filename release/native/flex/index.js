// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=169)}({1:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(7);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r(a).default}})},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.type?n("text",{staticClass:["am-icon"],class:t.iconClass,style:t.iconStyle},[t._v(t._s(t.Icon[t.type]||t.type))]):t._e()},staticRenderFns:[]}},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["am-nav-bar","am-nav-bar-"+t.mode]},[n("div",{staticClass:["am-nav-bar-left"]},[t._t("left",t._l(t.left,function(e,r){return n("div",{key:r,class:["am-nav-bar-btn","am-nav-bar-"+t.mode+"-btn"],on:{click:function(n){t.handleClick(e)}}},["icon"===e.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+t.mode+"-btn-icon"],attrs:{type:e.type}}):"text"===e.is?n("text",{class:["am-nav-bar-btn-text","am-nav-bar-"+t.mode+"-btn-text"]},[t._v(t._s(e.text))]):t._e()],1)}))],2),t._t("title",[n("text",{class:["am-nav-bar-title","am-nav-bar-"+t.mode+"-title"],on:{click:function(e){t.handleClick({key:"title"})}}},[t._v(t._s(t.title))])]),n("div",{staticClass:["am-nav-bar-right"]},[t._t("right",t._l(t.right,function(e,r){return n("div",{key:r,class:["am-nav-bar-btn","am-nav-bar-"+t.mode+"-btn"],on:{click:function(n){t.handleClick(e)}}},["icon"===e.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+t.mode+"-btn-icon"],attrs:{type:e.type}}):"text"===e.is?n("text",{class:["am-nav-bar-btn-text","am-nav-bar-"+t.mode+"-btn-text"]},[t._v(t._s(e.text))]):t._e()],1)}))],2)],2)},staticRenderFns:[]}},14:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(15);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r(a).default}})},15:function(t,e,n){var r,a,o=[];o.push(n(16)),r=n(17);var i=n(18);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-a3663fbc",a.style=a.style||{},o.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,o),t.exports=r},16:function(t,e){t.exports={"am-button":{height:"94",lineHeight:"94",textAlign:"center",borderWidth:1,borderStyle:"solid",borderRadius:"10",fontSize:"36",lines:1,color:"#ffffff",paddingLeft:"30",paddingRight:"30"},"am-button-default":{color:"#000000",backgroundColor:"#ffffff",borderColor:"#dddddd"},"am-button-default-active":{backgroundColor:"#dddddd"},"am-button-default-disabled":{opacity:.6,color:"rgba(0,0,0,0.3)"},"am-button-primary":{backgroundColor:"#108ee9",borderColor:"#108ee9"},"am-button-primary-active":{backgroundColor:"#0e80d2",borderColor:"#0e80d2",color:"rgba(255,255,255,0.3)"},"am-button-primary-disabled":{opacity:.4,color:"rgba(255,255,255,0.6)"},"am-button-warning":{backgroundColor:"#e94f4f",borderColor:"#e94f4f"},"am-button-warning-active":{backgroundColor:"#d24747",borderColor:"#d24747",color:"rgba(255,255,255,0.3)"},"am-button-warning-disabled":{opacity:.6,color:"rgba(255,255,255,0.6)"},"am-button-ghost":{backgroundColor:"rgba(0,0,0,0)",borderColor:"#108ee9",color:"#108ee9"},"am-button-ghost-active":{color:"rgba(16,142,233,0.6)",borderColor:"rgba(16,142,233,0.6)"},"am-button-ghost-disabled":{color:"rgba(0,0,0,0.1)",borderColor:"rgba(0,0,0,0.1)"},"am-button-small":{fontSize:"26",height:"60",lineHeight:"60"}}},169:function(t,e,n){var r,a,o=[];o.push(n(170)),r=n(171);var i=n(172);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-65ea06e2",a.style=a.style||{},o.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,o),t.exports=r,t.exports.el="true",new Vue(t.exports)},17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"am-button",props:{width:{type:String,default:""},text:{type:String,default:"确认"},size:{type:String,default:"large"},type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1},btnStyle:{type:Object,default:function(){return{}}}},data:function(){return{active:!1}},computed:{btnClass:function(){var t={"am-button":!0};return t["am-button-"+this.type]=!0,t["am-button-"+this.type+"-active"]=!this.disabled&&this.active,t["am-button-"+this.type+"-disabled"]=this.disabled,t["am-button-small"]="small"===this.size,Object.keys(t).filter(function(e){return t[e]})},_style:function(){var t=this.btnStyle;return this.width&&(t.width=this.width),t}},methods:{_touchstart:function(){this.active=!0},_touchend:function(){this.active=!1},handleClick:function(t){this.disabled||this.$emit("click",t)}}}},170:function(t,e){t.exports={}},171:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=r(a),i=n(28),c=r(i),s=n(74),l=r(s),u=n(39),f=r(u),d=n(14),p=r(d),_=n(45),m=r(_);e.default={components:{Placeholder:m.default,AmButton:p.default,AmFlex:f.default,AmFlexItem:l.default,AmWhiteSpace:c.default,AmNavBar:o.default},computed:{},data:function(){return{count:1}}}},172:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("am-nav-bar",{attrs:{title:"am-flex"}}),n("scroller",[n("div",[n("am-white-space"),n("am-flex",t._l(2,function(t){return n("am-flex-item",{key:t},[n("placeholder")],1)})),n("am-white-space"),n("am-flex",t._l(3,function(t){return n("am-flex-item",{key:t},[n("placeholder")],1)})),n("am-white-space"),n("am-flex",t._l(4,function(t){return n("am-flex-item",{key:t},[n("placeholder")],1)})),n("am-white-space"),n("am-flex",{attrs:{gutter:10}},t._l(t.count,function(t){return n("am-flex-item",{key:t},[n("placeholder")],1)})),n("am-white-space"),n("am-button",{on:{click:function(e){t.count++}}},[t._v("add block")])],1)])],1)},staticRenderFns:[]}},18:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("text",{class:t.btnClass,style:t._style,on:{touchstart:t._touchstart,touchend:t._touchend,touchcancel:t._touchend,click:t.handleClick}},[t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]}},2:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(4);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r(a).default}})},28:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(29);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r(a).default}})},29:function(t,e,n){var r,a,o=[];o.push(n(30)),r=n(31);var i=n(32);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-ed673070",a.style=a.style||{},o.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,o),t.exports=r},3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={search:"",reload:"","arrow-down":"","arrow-up":"","arrow-right":"","arrow-left":"",down:"",up:"",right:"",left:"","warning-circle":"","warning-circle-o":"","close-circle":"","close-circle-o":"","check-circle":"","check-circle-o":"",check:"","clock-circle":"","clock-circle-o":"",ellipsis:"",loading:""};e.default=r},30:function(t,e){t.exports={"am-white-space-xs":{height:"6"},"am-white-space-sm":{height:"12"},"am-white-space-md":{height:"18"},"am-white-space-lg":{height:"30"},"am-white-space-xl":{height:"42"}}},31:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"am-white-space",props:{size:{type:String,default:"md"}}}},32:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["am-white-space-"+t.size]})},staticRenderFns:[]}},39:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(41);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r(a).default}})},4:function(t,e,n){var r,a,o=[];o.push(n(5)),r=n(6);var i=n(11);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-49b3ea8f",a.style=a.style||{},o.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,o),t.exports=r},41:function(t,e,n){var r,a,o=[];r=n(42);var i=n(43);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a.style=a.style||{},o.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,o),t.exports=r},42:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"am-flex",props:{gutter:{type:Number,default:16},direction:{type:String,default:"row",validator:function(t){return-1!==["column","row"].indexOf(t)}},justify:{type:String,default:"flex-start",validator:function(t){return-1!==["flex-start","flex-end","center","space-between","space-around"].indexOf(t)}},align:{type:String,default:"stretch",validator:function(t){return-1!==["stretch","flex-start","flex-end","center"].indexOf(t)}},wrap:{type:String,default:"nowrap",validator:function(t){return["nowrap","wrap","wrap-reverse"]}}},computed:{style:function(){return{flexDirection:this.direction,justifyContent:this.justify,alignItems:this.align,flexWrap:this.wrap}}}}},43:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:["am-flex"],style:t.style},[t._t("default")],2)},staticRenderFns:[]}},45:function(t,e,n){var r,a,o=[];o.push(n(46)),r=n(47);var i=n(48);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-53c9a3f1",a.style=a.style||{},o.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,o),t.exports=r},46:function(t,e){t.exports={block:{height:"100",lineHeight:"100",backgroundColor:"#dddddd",textAlign:"center",fontSize:"32"}}},47:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},48:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("text",{staticClass:["block"]},[t._v("block")])},staticRenderFns:[]}},5:function(t,e){t.exports={"am-nav-bar":{alignItems:"stretch",height:"90",backgroundColor:"#108ee9",flexDirection:"row"},"am-nav-bar-left":{flex:1,alignItems:"stretch",flexDirection:"row"},"am-nav-bar-right":{flex:1,alignItems:"stretch",flexDirection:"row",justifyContent:"flex-end"},"am-nav-bar-title":{flex:2,textAlign:"center",alignSelf:"center",fontSize:"36",whiteSpace:"nowrap",color:"#ffffff"},"am-nav-bar-btn":{minWidth:"90",paddingLeft:"23",paddingRight:"23",alignItems:"center",justifyContent:"center","backgroundColor:active":"#0e80d2"},"am-nav-bar-btn-icon":{color:"#ffffff"},"am-nav-bar-btn-text":{fontSize:"32",color:"#ffffff"},"am-nav-bar-light":{backgroundColor:"#ffffff"},"am-nav-bar-light-title":{color:"#000000"},"am-nav-bar-light-btn":{"backgroundColor:active":"#dddddd"},"am-nav-bar-light-btn-icon":{color:"#108ee9"},"am-nav-bar-light-btn-text":{color:"#108ee9"}}},6:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),o=r(a),i=weex.requireModule("navigator");e.default={name:"am-nav-bar",props:{mode:{type:String,default:"dark"},title:{type:String,default:null},leftBtn:{type:Array,default:function(){return[{is:"icon",type:"left",onClick:function(){i.pop({},function(t){})}}]}},rightBtn:{type:Array,default:function(){return[]}}},components:{AmIcon:o.default},computed:{navBarClass:function(){return["am-nav-bar-"+this.mode]},titleClass:function(){return["am-nav-bar-"+this.mode+"-title"]},left:function(){return this.makeBtn(this.leftBtn)},right:function(){return this.makeBtn(this.rightBtn)}},methods:{makeBtn:function(t){return t.map(function(t){var e=t;return"string"==typeof t&&(e={is:"icon",type:t}),e})},handleClick:function(t){"function"==typeof t.onClick?t.onClick():this.$emit("click",t.key||t.type||t.text||t.src)}}}},7:function(t,e,n){var r,a,o=[];o.push(n(8)),r=n(9);var i=n(10);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-cc094c2e",a.style=a.style||{},o.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,o),t.exports=r},74:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(82);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r(a).default}})},8:function(t,e){t.exports={"am-icon-xxs":{fontSize:"30",lineHeight:"30"},"am-icon-xs":{fontSize:"36",lineHeight:"36"},"am-icon-sm":{fontSize:"42",lineHeight:"42"},"am-icon-md":{fontSize:"44",lineHeight:"44"},"am-icon-lg":{fontSize:"72",lineHeight:"72"}}},82:function(t,e,n){var r,a,o=[];o.push(n(83)),r=n(84);var i=n(85);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,a._scopeId="data-v-5f40f54c",a.style=a.style||{},o.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,o),t.exports=r},83:function(t,e){t.exports={}},84:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"am-flex-item",props:{flex:{type:Number,default:1}},computed:{isFirstChild:function(){return this.$parent&&this.$parent.$slots.default[0]===this.$vnode},style:function(){var t=!this.isFirstChild&&this.$parent.gutter?this.$parent.gutter:0;return{flex:this.flex,marginLeft:t+"px"}}},created:function(){}}},85:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:["am-flex-item"],style:t.style},[t._t("default")],2)},staticRenderFns:[]}},9:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),o=r(a),i=weex.requireModule("dom");e.default={name:"am-icon",props:{type:{type:String,default:null},size:{type:[String,Number],default:"md"},color:{type:String,default:null},fontFamily:{type:String,default:"AMUIIconFont"}},data:function(){return{Icon:o.default}},computed:{iconClass:function(){return isNaN(this.size)?["am-icon-"+this.size]:null},iconStyle:function(){var t={color:this.color,fontFamily:this.fontFamily};return isNaN(this.size)||(t.fontSize=this.size+"px",t.lineHeight=this.size+"px"),t}},beforeCreate:function(){i.addRule("fontFace",{fontFamily:"AMUIIconFont",src:"url('https://at.alicdn.com/t/font_666184_6i47o5l7pbiysyvi.ttf')"})}}}});