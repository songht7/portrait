(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-lucky"],{"06c5":function(e,t,n){"use strict";n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=c(n("6b75"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(e){if("string"===typeof e)return(0,a.default)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,a.default)(e,t):void 0}}},"0b83":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-3cd4bd30]{font-size:%?12?%;padding:%?20?%}.ipt[data-v-3cd4bd30]{font-size:%?12?%;border-bottom:1px solid #ddd;width:100px;text-align:center}.lucky-box[data-v-3cd4bd30]{width:100%;padding-top:%?30?%}.lucky-numb[data-v-3cd4bd30]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}.numb[data-v-3cd4bd30]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;width:%?150?%;height:%?150?%;font-size:%?60?%;border:%?5?% solid #ddd;border-radius:50%;margin:0 %?10?%}.lucky-value[data-v-3cd4bd30]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;padding:%?50?% 0;font-size:%?30?%}.lucky-value[data-v-3cd4bd30]{top:%?20?%;bottom:auto}.lk-val[data-v-3cd4bd30]{padding:0 %?2?%}.lb-row[data-v-3cd4bd30]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}",""]),e.exports=t},"0e3d":function(e,t,n){"use strict";n.r(t);var a=n("2702"),c=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=c.a},2702:function(e,t,n){"use strict";var a=n("4ea4");n("99af"),n("caad"),n("d3b7"),n("e25e"),n("25f0"),n("2532"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n("5530")),u=a(n("2909")),i="",o={data:function(){return{lucky:1,luckyCount:1,pCount:200,minNum:1,isLucked:{},numb:[],StorageLucked:[],luckyV1:[],luckyV2:[],luckyV3:[],hasBlockBox:!1}},onLoad:function(e){},onShow:function(){var e=this;e.getAction(),e.getLucked(),e.getmyLuck()},onReady:function(){var e=this;e.random(0)},components:{},methods:{getAction:function(){var e=this;uni.getStorage({key:"rbdAction",success:function(t){e.lucky=parseInt(t.data.lucky),e.luckyCount=parseInt(t.data.luckyCount),e.pCount=parseInt(t.data.pCount)}})},getLucked:function(){var e=this;uni.getStorage({key:"rbdLucked",success:function(t){var n=t.data.v1?t.data.v1:[],a=t.data.v2?t.data.v2:[],c=t.data.v3?t.data.v3:[],i=t.data.v4?t.data.v4:[],o=t.data.v5?t.data.v5:[],l=[].concat((0,u.default)(n),(0,u.default)(a),(0,u.default)(c),(0,u.default)(i),(0,u.default)(o));e.StorageLucked=l;var d="v"+e.lucky;t.data[d]&&t.data[d].length>0&&(e.isLucked[d]=t.data[d]),console.log("StorageLucked::",l)},fail:function(){e.StorageLucked=[],e.isLucked={}}})},getmyLuck:function(){var e=this;uni.getStorage({key:"myLuck",success:function(t){e.luckyV1=t.data.v1?t.data.v1:[],e.luckyV2=t.data.v2?t.data.v2:[],e.luckyV3=t.data.v3?t.data.v3:[],(e.luckyV1.length||e.luckyV2.length||e.luckyV3.length)&&(console.log("myLuck::",e.luckyV1,e.luckyV2,e.luckyV3),e.hasBlockBox=!0)},fail:function(){e.luckyV1=[],e.luckyV2=[],e.luckyV3=[],e.hasBlockBox=!1}})},getData:function(e){var t=this,n="v"+t.lucky;if(console.log(n),t.isLucked[n]&&t.isLucked[n].length>=t.luckyCount)return uni.showToast({title:"本轮抽奖结束"}),!1;if(i){clearInterval(i),i="";var a={};switch(t.lucky.toString()){case"1":var o=t.isLucked["v1"]?t.isLucked["v1"]:[];t.hasBlockBox&&t.luckyV1.length&&(t.numb=t.luckyV1),a={v1:[].concat((0,u.default)(o),(0,u.default)(t.numb))};break;case"2":var l=t.isLucked["v2"]?t.isLucked["v2"]:[];if(t.hasBlockBox){var d=t.isLucked[n]&&t.isLucked[n].length?t.luckyCount-t.isLucked[n].length:0;t.luckyV2[d]&&(t.numb=[t.luckyV2[d]])}a={v2:[].concat((0,u.default)(l),(0,u.default)(t.numb))};break;case"3":var r=t.isLucked["v3"]?t.isLucked["v3"]:[];if(t.hasBlockBox){var s=t.isLucked[n]&&t.isLucked[n].length?t.luckyCount-t.isLucked[n].length:0;t.luckyV3[s]&&(t.numb=[t.luckyV3[s]])}a={v3:[].concat((0,u.default)(r),(0,u.default)(t.numb))};break;case"4":var k=t.isLucked["v4"]?t.isLucked["v4"]:[];if(t.hasBlockBox){var f=t.isLucked[n]&&t.isLucked[n].length?t.luckyCount-t.isLucked[n].length:0;t.numb=[t.luckyV4[f]]}a={v4:[].concat((0,u.default)(k),(0,u.default)(t.numb))};break;case"5":var b=t.isLucked["v5"]?t.isLucked["v5"]:[];if(t.hasBlockBox){var v=t.isLucked[n]&&t.isLucked[n].length?t.luckyCount-t.isLucked[n].length:0;t.numb=[t.luckyV5[v]]}a={v5:[].concat((0,u.default)(b),(0,u.default)(t.numb))};break;default:break}var y=(0,c.default)((0,c.default)({},t.isLucked),a);t.isLucked=y,uni.getStorage({key:"rbdLucked",success:function(e){uni.setStorage({key:"rbdLucked",data:(0,c.default)((0,c.default)({},e.data),y),success:function(){t.getLucked()}})},fail:function(){uni.setStorage({key:"rbdLucked",data:y,success:function(){t.getLucked()}})}}),console.log("isLucked:::",y,a)}else t.isLucked[n]&&t.isLucked[n].length<t.luckyCount?t.random(i):t.isLucked[n]||t.random(i)},random:function(e){var t=this,n=1,a=t.pCount;t.minNum;i=setInterval((function(){var e=n+1<=a?n+1:1;t.StorageLucked.includes(e)||(t.numb=[e]),n=e}),.1)},getLucky:function(e){console.log(e.detail.value)},getLuckyCount:function(e){console.log(e.detail.value)},getPCount:function(e){console.log(e.detail.value)}}};t.default=o},2909:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var a=o(n("6005")),c=o(n("db90")),u=o(n("06c5")),i=o(n("3427"));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(0,a.default)(e)||(0,c.default)(e)||(0,u.default)(e)||(0,i.default)()}},3427:function(e,t,n){"use strict";function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},5625:function(e,t,n){var a=n("0b83");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var c=n("4f06").default;c("55d9bf7e",a,!0,{sourceMap:!1,shadowMode:!1})},6005:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=c(n("6b75"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){if(Array.isArray(e))return(0,a.default)(e)}},"6b75":function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},"7f06":function(e,t,n){"use strict";var a=n("5625"),c=n.n(a);c.a},b4b4:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"lucky-box"},[n("v-uni-view",{staticClass:"lucky-numb"},[e._l(e.numb,(function(t,a){return[n("v-uni-view",{key:a+"_0",staticClass:"numb",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getData(a)}}},[e._v(e._s(t))])]}))],2),n("v-uni-view",{staticClass:"lucky-value"},[n("v-uni-view",{staticClass:"lb-row"},[e._v(e._s(e.lucky)+"等奖"+e._s(e.luckyCount)+"名")]),n("v-uni-view",{staticClass:"lb-row"},[e._v("幸运号码"),e._l(e.isLucked["v"+e.lucky],(function(t,a){return[n("v-uni-text",{key:a+"_0",staticClass:"lk-val"},[e._v("‘"+e._s(t)+"’")])]})),e._v("。")],2)],1)],1)},u=[]},db90:function(e,t,n){"use strict";function a(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},dcb1:function(e,t,n){"use strict";n.r(t);var a=n("b4b4"),c=n("0e3d");for(var u in c)"default"!==u&&function(e){n.d(t,e,(function(){return c[e]}))}(u);n("7f06");var i,o=n("f0c5"),l=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,"3cd4bd30",null,!1,a["a"],i);t["default"]=l.exports}}]);