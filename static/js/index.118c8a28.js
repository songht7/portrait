(function(e){function n(n){for(var o,r,s=n[0],c=n[1],u=n[2],d=0,f=[];d<s.length;d++)r=s[d],a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(o=!1)}o&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},a={index:0},i=[];function r(e){return s.p+"static/js/"+({"pages-index-es":"pages-index-es","pages-index-index":"pages-index-index","pages-index-star":"pages-index-star"}[e]||e)+"."+{"pages-index-es":"c30f7868","pages-index-index":"f2c8035c","pages-index-star":"bda69a74"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,o){t=a[e]=[n,o]});n.push(t[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(e),i=function(n){c.onerror=c.onload=null,clearTimeout(u);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");r.type=o,r.request=i,t[1](r)}a[e]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var l=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("0b2e")},"04b8":function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("386d"),t("4917"),t("3b2b"),t("6762"),t("2fdb");var a=o(t("e143")),i=o(t("2f62")),r=o(t("c12d"));t("066d");a.default.use(i.default);var s=new i.default.Store({state:{loading:"0",data:{},interface:r.default.Interface,systemInfo:{},imgTemp:"",wxInfo:r.default.Interface.wxInfo,wxCode:"",isWeixin:!1,portrait:"",cosConfig:r.default.Interface.cosConfig,userInfo:{}},mutations:{update_data:function(e,n){e.data=n},setSystemInfo:function(e,n){e.systemInfo=n}},actions:{getData:function(e,n){var t=n.parm||"",o=e.state.interface.apiurl+e.state.interface.addr[n.inter]+t;console.log("getData-url-",n.inter,"：",o),console.log("getData-parm-",n.inter,"：",n);var a=[];uni.request({url:o,data:n.data||{},method:n.method||"GET",header:n.header||{},success:function(t){console.log("getData-success-",n.inter,"：",t),t.success&&e.commit("update_data",t.data.data),a=t.data},fail:function(e){console.log("getData-err-",n.inter,"：",e),a={success:!1,msg:"接口请求失败",err:e}},complete:function(){n.fun&&new n.fun(a)}})},isWeixin:function(e){var n=!!/micromessenger/i.test(navigator.userAgent.toLowerCase());console.log("==isWeixin==",n),e.state.isWeixin=n},isIOS:function(e){var n=navigator.userAgent.includes("iPhone"),t=navigator.userAgent.includes("iPad");return n||t},getWXCode:function(e){if(console.log("---getWXCode---"),e.state.isWeixin){console.log("tttttttttttt");var n="";uni.getStorage({key:"uWXInfo",success:function(e){console.log("success"),n=e.data},complete:function(){if(console.log("=====getStorage-_uWXInfo======"),console.log(n),n&&n.openid){console.log("=====1======"),e.state.userInfo=n;n.openid}else{console.log("=====2======");var t="",o=new RegExp("(^|&)code=([^&]*)(&|$)","i"),a=window&&window.location.search.substr(1).match(o);if(null!=a&&(t=unescape(a[2])),console.log("code：",t),t){var i={inter:"getWeChatInfo",parm:"?code=".concat(t),fun:function(e){console.log("getWeChatInfo：",e);var n=e.data.data;uni.setStorage({key:"uWXInfo",data:n,success:function(){}})}};e.dispatch("getData",i)}else{var r=e.state.interface.wxInfo.AppID,s=e.state.interface.domain,c=encodeURIComponent(s),u="snsapi_userinfo",d="STATE",l="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+r+"&redirect_uri="+c+"&response_type=code&scope="+u+"&state="+d+"#wechat_redirect";console.log("_url:",l),window.location.href=l}}}})}else console.log("fffffffffffff")},wxShare:function(e,n){var t=n.share_url,o=n.title,a=n.imgUrl,i=n.dec,r=function(e){uni.setStorage({key:"wx_ticket",data:{access_token:e.access_token,jsapi_ticket:e.ticket,noncestr:e.noncestr,signature:e.signature,expires_in:e.expires_in},success:function(){}});var n={debug:!1,appId:Interface.wx.appid,timestamp:e.timestamp,nonceStr:e.noncestr,signature:e.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline","onMenuShareQQ"]};wx.config(n)},s=location.origin+"/#/";e.dispatch("isIOS")&&(s=location.origin+"/");"?url=".concat(s),e.dispatch("getData",_pram),location.origin,location.hash;a=a||Interface.domain+"/static/share.png";var c={title:o||"看，我的专属头像",desc:i||"定制我的趣味头像吧！",link:t,imgUrl:a,success:function(){var n=function(e){var n=e.openid?e.openid:"",t=Interface.wx.test_openid,o={openid:n||t};console.log("-----share succ----"),console.log(o)};e.dispatch("getMyStorage",{key:"uWXInfo",val:"",fun:n})}};wx.ready(function(){wx.onMenuShareAppMessage(c),wx.onMenuShareTimeline(c),wx.onMenuShareQQ(c)})},queryString:function(e,n){var t=new RegExp("(^|&)".concat(n,"=([^&]*)(&|$)"),"i"),o=window&&window.location.search.substr(1).match(t),a="";null!=o&&(a=unescape(o[2])),"code"==n&&(e.state.wxCode=a)},getMyStorage:function(e,n){var t=n.key,o=n.val,a=n.fun,i="";uni.getStorage({key:t,success:function(e){i=o?e.data.val:e.data},complete:function(e){a&&new a(i)}})},getSystemInfo:function(e){var n={};uni.getSystemInfo({success:function(e){n=e,console.log(n)},complete:function(){e.commit("setSystemInfo",n)}})}},modules:{}}),c=s;n.default=c},"0b2e":function(e,n,t){"use strict";var o=t("288e"),a=o(t("cebc"));t("cadf"),t("551c"),t("097d"),t("654f"),t("1c31"),t("921b");var i=o(t("e143")),r=o(t("8da1")),s=o(t("04b8"));i.default.config.productionTip=!1,i.default.prototype.$store=s.default,r.default.mpType="app";var c=new i.default((0,a.default)({},r.default));c.$mount()},"1e87":function(e,n,t){"use strict";t.r(n);var o=t("69d6"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=a.a},"1f53":function(e,n,t){var o=t("3457");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=t("4f06").default;a("1929ce3a",o,!0,{sourceMap:!1,shadowMode:!1})},"22a5":function(e,n,t){"use strict";var o=t("1f53"),a=t.n(o);a.a},"25f1":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},a=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a})},3457:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""])},5344:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={pages:{"pages/index/index":{navigationBarTitleText:"头像DIY",navigationStyle:"custom",titleNView:{type:"transparent"}},"pages/index/star":{navigationBarTitleText:"star",navigationStyle:"custom",titleNView:{type:"transparent"}},"pages/index/es":{navigationBarTitleText:"ECMAScript 6.0 - TEST"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};n.default=o},"654f":function(e,n,t){"use strict";(function(e){var n=t("288e"),o=n(t("5176")),a=n(t("e143"));e["____17F0F4C____"]=!0,delete e["____17F0F4C____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},a.default.component("pages-index-index",function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("7f89"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),a.default.component("pages-index-star",function(e){var n={component:t.e("pages-index-star").then(function(){return e(t("1a84"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),a.default.component("pages-index-es",function(e){var n={component:t.e("pages-index-es").then(function(){return e(t("4e7b"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:(0,o.default)({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"头像DIY",navigationStyle:"custom",titleNView:{type:"transparent"}})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/index/star",component:{render:function(e){return e("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"star",navigationStyle:"custom",titleNView:{type:"transparent"}})},[e("pages-index-star",{slot:"page"})])}},meta:{name:"pages-index-star",isNVue:!1,pagePath:"pages/index/star",windowTop:0}},{path:"/pages/index/es",component:{render:function(e){return e("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"ECMAScript 6.0 - TEST"})},[e("pages-index-es",{slot:"page"})])}},meta:{name:"pages-index-es",isNVue:!1,pagePath:"pages/index/es",windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))},"69d6":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){console.log("App Launch"),this.$store.dispatch("getSystemInfo"),this.$store.dispatch("isWeixin")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},"8da1":function(e,n,t){"use strict";t.r(n);var o=t("25f1"),a=t("1e87");for(var i in a)"default"!==i&&function(e){t.d(n,e,function(){return a[e]})}(i);t("22a5");var r=t("2877"),s=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports},"951d":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={appid:"__UNI__17F0F4C"};n.default=o},c12d:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={formal:{interface:"https://api.bdmartech.com",domain:"http://m.bdmartech.com",cosConfig:{Bucket:"plbs-test-1257286922",Region:"ap-shanghai",SecretId:"",SecretKey:""},wx:{AppID:"wx11eb371cd85adfd4",ast:""}},dev:{interface:"http://api-head.wsshanghai.com",domain:"http://portrait.bdmartech.com/",cosConfig:{Bucket:"plbs-test-1257286922",Region:"ap-shanghai",SecretId:"",SecretKey:""},wx:{AppID:"wxb33e824504e4a764",ast:""}}},a="dev",i={Interface:{site:a,apiurl:o[a]["interface"],domain:o[a]["domain"],cosConfig:o[a]["cosConfig"],wxInfo:o[a]["wx"],addr:{getCos:"/v6/ApiBase-getCos.htm",getWeChatInfo:"/v6/ApiWeChat-getWeChatInfo.htm",getWeChatOpenId:"/v6/ApiWeChat-getWeChatOpenId.htm",getMaterialList:"/v6/ApiMaterial-getMaterialList.htm",slideShow:"/v6/ApiBase-slideShow.htm",slideShow2:"/v6/ApiBase-slideShow.htm",headImage:"/v6/ApiCustomer-headImage.htm"}}};n.default=i}});