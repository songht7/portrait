(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-gift-index"],{"13f3":function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("2909")),o={data:function(){return{list:[],pageNo:1,pageSize:20,txt:""}},onLoad:function(){this.detail()},methods:{scrolltolower:function(){this.detail()},detail:function(){var e=this,i=JSON.parse(uni.getStorageSync("userInfo")).id,a={userId:i,pageNo:this.pageNo,pageSize:this.pageSize};this.$base.getRequest("GET",this.$base.api["pointList"],a).then((function(i){t.log(i);var a=i.data;1==a.code&&(a.data.length>0?(e.list=[].concat((0,n.default)(e.list),(0,n.default)(a.data)),e.pageNo++):e.pageNo>1&&(e.txt="页面有限 关爱无限"))})).catch((function(e){t.log("error:"+e)}))},clickLeft:function(){uni.redirectTo({url:"/pages/user/user"})},goto:function(t){uni.navigateTo({url:"/pages/gift/detail",events:{},success:function(e){e.eventChannel.emit("getDate",{e:t})}})}}};e.default=o}).call(this,i("5a52")["default"])},3062:function(t,e,i){"use strict";i.r(e);var a=i("13f3"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"91bc":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticStyle:{height:"65px"}}),t.list.length>0?i("v-uni-view",{staticClass:"giftBox"},[i("v-uni-view",{staticClass:"srcollDate"},[i("v-uni-scroll-view",{staticClass:"scroll",attrs:{"scroll-y":"true","lower-threshold":"0"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.scrolltolower.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"srcollBox"},[t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"giftList",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goto(e)}}},[i("v-uni-image",{attrs:{src:e.url}}),i("v-uni-view",{staticClass:"giftBeta"},[i("v-uni-view",{staticClass:"giftName"},[i("v-uni-text",[t._v(t._s(e.goodsName))]),i("v-uni-text",[t._v(t._s(0!=e.status?"已发货":"待发货"))])],1),i("v-uni-view",{staticClass:"giftPoint"},[t._v(t._s(e.integralNum)),i("v-uni-text",[t._v("积分")])],1)],1)],1)})),0!=t.txt.length?i("v-uni-view",{staticClass:"lastTxt"},[t._v(t._s(t.txt))]):t._e()],2)],1)],1)],1):t._e(),0==t.list.length?i("v-uni-view",{staticClass:"noDate"},[i("v-uni-view",{staticClass:"null"},[t._v("暂无礼品")])],1):t._e()],1)},o=[]},"9ed6":function(t,e,i){"use strict";var a=i("b913"),n=i.n(a);n.a},b913:function(t,e,i){var a=i("e933");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("cb03f872",a,!0,{sourceMap:!1,shadowMode:!1})},e54d:function(t,e,i){"use strict";i.r(e);var a=i("91bc"),n=i("3062");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9ed6");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"5fe29697",null,!1,a["a"],s);e["default"]=c.exports},e880:function(t,e,i){t.exports=i.p+"static/img/navBg.79377a38.png"},e933:function(t,e,i){var a=i("24fb"),n=i("1de5"),o=i("e880"),s=i("72ed");e=a(!1);var r=n(o),c=n(s);e.push([t.i,".page[data-v-5fe29697]{background:url("+r+") no-repeat;background-size:100% auto}.giftBox[data-v-5fe29697]{height:91%}.srcollDate[data-v-5fe29697]{width:100%;height:100%}.scroll[data-v-5fe29697]{height:100%}.srcollBox[data-v-5fe29697]{-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.giftList[data-v-5fe29697]{margin:%?30?% auto;background-color:#fff;width:90%;padding:%?30?% %?36?%;box-shadow:0 8px 40px 0 rgba(0,0,0,.1);border-radius:20px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.giftList uni-image[data-v-5fe29697]{width:%?180?%;height:%?180?%;border-radius:%?20?%}.giftBeta[data-v-5fe29697]{margin-left:%?28?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:62%;font-size:%?32?%}.giftName[data-v-5fe29697],.giftPoint[data-v-5fe29697]{width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.giftName[data-v-5fe29697]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.giftName uni-text[data-v-5fe29697]:first-child{width:130px}.giftName uni-text[data-v-5fe29697]:last-child{font-size:%?30?%;color:#f7716b}.giftPoint[data-v-5fe29697]{font-size:%?35?%;font-weight:500;color:#ff202c;line-height:1.5}.giftPoint uni-text[data-v-5fe29697]{font-size:%?26?%;line-height:2;padding-left:%?5?%}.noDate[data-v-5fe29697]{width:100%;height:75%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.null[data-v-5fe29697]{background:url("+c+") center 0 no-repeat;text-align:center;width:100%;padding-top:125px;margin-bottom:28px;color:#a7a7a7;font-size:12px;line-height:1.5}",""]),t.exports=e}}]);