(function(e){function n(n){for(var a,r,s=n[0],c=n[1],u=n[2],d=0,p=[];d<s.length;d++)r=s[d],i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(n);while(p.length)p.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,r=1;r<t.length;r++){var c=t[r];0!==i[c]&&(a=!1)}a&&(o.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},i={index:0},o=[];function r(e){return s.p+"static/js/"+({"pages-index-es":"pages-index-es","pages-index-index":"pages-index-index","pages-index-star":"pages-index-star"}[e]||e)+"."+{"pages-index-es":"5d7e3656","pages-index-index":"4e1ff420","pages-index-star":"865b7648"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=i[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise(function(n,a){t=i[e]=[n,a]});n.push(t[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(e),o=function(n){c.onerror=c.onload=null,clearTimeout(u);var t=i[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");r.type=a,r.request=o,t[1](r)}i[e]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var l=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("6051")},"0535":function(e,n,t){"use strict";t.r(n);var a=t("47a1"),i=t("fa0b");for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);t("f92b");var r=t("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=s.exports},"0b48":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={pages:{"pages/index/index":{navigationBarTitleText:"头像DIY",navigationStyle:"custom",titleNView:{type:"transparent"}},"pages/index/star":{navigationBarTitleText:"star",navigationStyle:"custom",titleNView:{type:"transparent"}},"pages/index/es":{navigationBarTitleText:"ECMAScript 6.0 - TEST"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};n.default=a},"27ed":function(e,n,t){"use strict";var a=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("6762"),t("2fdb");var i=a(t("e143")),o=a(t("2f62")),r=a(t("f2b3"));t("04f7");i.default.use(o.default);var s=new o.default.Store({state:{loading:"0",data:{},interface:r.default.Interface,systemInfo:{},imgTemp:"",wxInfo:r.default.Interface.wxInfo,isWeixin:!1,portrait:"",cosConfig:r.default.Interface.cosConfig},mutations:{update_data:function(e,n){e.data=n},setSystemInfo:function(e,n){e.systemInfo=n}},actions:{getData:function(e,n){var t=n.parm||"",a=e.state.interface.apiurl+e.state.interface.addr[n.inter]+t;console.log("getData-url-",n.inter,"：",a),console.log("getData-parm-",n.inter,"：",n);var i=[];uni.request({url:a,data:n.data||{},method:n.method||"GET",header:n.header||{},success:function(t){console.log("getData-success-",n.inter,"：",t),t.success&&e.commit("update_data",t.data.data),i=t.data},fail:function(e){console.log("getData-err-",n.inter,"：",e),i={success:!1,msg:"接口请求失败",err:e}},complete:function(){e.commit("switch_loading","0"),n.fun&&new n.fun(i)}})},isWeixin:function(e){var n=!!/micromessenger/i.test(navigator.userAgent.toLowerCase());e.state.isWeixin=n},isIOS:function(e){var n=navigator.userAgent.includes("iPhone"),t=navigator.userAgent.includes("iPad");return n||t},getWXCode:function(e){var n=e.state.interface.wxInfo.AppID;if(e.state.isWeixin){var t="";uni.getStorage({key:"uWXInfo",success:function(e){t=e.data},complete:function(){if(t&&t.openid)t.openid;else{var a=e.state.interface.domain,i=encodeURIComponent(a),o="snsapi_userinfo",r="STATE",s="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+n+"&redirect_uri="+i+"&response_type=code&scope="+o+"&state="+r+"#wechat_redirect",c=e.dispatch("queryString","code");c?e.dispatch("userLogin",c):window.location.href=s}}})}},wxShare:function(e,n){var t=this,a=n.share_url,i=n.title,o=n.imgUrl,r=n.dec,s=function(e){uni.setStorage({key:"wx_ticket",data:{access_token:e.access_token,jsapi_ticket:e.ticket,noncestr:e.noncestr,signature:e.signature,expires_in:e.expires_in},success:function(){}});var n={debug:!1,appId:Interface.wx.appid,timestamp:e.timestamp,nonceStr:e.noncestr,signature:e.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline","onMenuShareQQ"]};wx.config(n)},c=location.origin+"/#/";e.dispatch("isIOS")&&(c=location.origin+"/");var u=Interface.apiurl+Interface.addr.getJsApiTicket+"?url="+c,d={},l=t.queryString("channel_code");l&&(d={channel_code:l});t.getData(u,s,"GET","",d);var p=location.origin+"/"+location.hash;p="http://main.meetji.com:3001?wxr="+encodeURIComponent(p);a=a||p;o=o||Interface.domain+"/static/share.jpg";var f={title:i||"英语免费试听",desc:r||"英语免费试听课，在这里找到你想要的",link:a,imgUrl:o,success:function(){var e=function(e){var n=e.openid?e.openid:"",a=Interface.wx.test_openid,i={openid:n||a};console.log("-----share succ----"),console.log(i);var o=function(e){e.point&&uni.getStorage({key:"uWXInfo",success:function(n){var t=n.data;t["point"]=e.point,uni.setStorage({key:"uWXInfo",data:t,success:function(){}})}})},r=Interface.apiurl+Interface.addr.savePoint;t.getData(r,o,"POST","",i)};t.getMyStorage("uWXInfo","",e)}};wx.ready(function(){wx.onMenuShareAppMessage(f),wx.onMenuShareTimeline(f),wx.onMenuShareQQ(f)})},getSystemInfo:function(e){var n={};uni.getSystemInfo({success:function(e){n=e,console.log(n)},complete:function(){e.commit("setSystemInfo",n)}})}},modules:{}}),c=s;n.default=c},"304d":function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""])},"47a1":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i})},5397:function(e,n,t){"use strict";(function(e){var n=t("288e"),a=n(t("5176")),i=n(t("e143"));e["____17F0F4C____"]=!0,delete e["____17F0F4C____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},i.default.component("pages-index-index",function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("9984"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),i.default.component("pages-index-star",function(e){var n={component:t.e("pages-index-star").then(function(){return e(t("1904"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),i.default.component("pages-index-es",function(e){var n={component:t.e("pages-index-es").then(function(){return e(t("d261"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:(0,a.default)({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"头像DIY",navigationStyle:"custom",titleNView:{type:"transparent"}})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/index/star",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"star",navigationStyle:"custom",titleNView:{type:"transparent"}})},[e("pages-index-star",{slot:"page"})])}},meta:{name:"pages-index-star",isNVue:!1,pagePath:"pages/index/star",windowTop:0}},{path:"/pages/index/es",component:{render:function(e){return e("Page",{props:(0,a.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"ECMAScript 6.0 - TEST"})},[e("pages-index-es",{slot:"page"})])}},meta:{name:"pages-index-es",isNVue:!1,pagePath:"pages/index/es",windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))},6051:function(e,n,t){"use strict";var a=t("288e"),i=a(t("cebc"));t("cadf"),t("551c"),t("097d"),t("5397"),t("1c31"),t("921b");var o=a(t("e143")),r=a(t("0535")),s=a(t("27ed"));o.default.config.productionTip=!1,o.default.prototype.$store=s.default,r.default.mpType="app";var c=new o.default((0,i.default)({},r.default));c.$mount()},"790c":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={appid:"__UNI__17F0F4C"};n.default=a},"9bd0":function(e,n,t){var a=t("304d");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=t("4f06").default;i("069b34d4",a,!0,{sourceMap:!1,shadowMode:!1})},bb77:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={onLaunch:function(){console.log("App Launch"),this.$store.dispatch("getSystemInfo"),this.$store.dispatch("isWeixin")},onShow:function(){console.log("App Show"),this.$store.dispatch("getWXCode")},onHide:function(){console.log("App Hide")}};n.default=a},f2b3:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={formal:{interface:"https://api.bdmartech.com",domain:"http://m.bdmartech.com",cosConfig:{Bucket:"plbs-test-1257286922",Region:"ap-shanghai",SecretId:"AKIDujJnIXMBSeeOuVMVt0sa2Jh5A90rcJoh",SecretKey:"tDI8jS2VWaXPDwUryoGblz2Z8B1k1QtF"},wx:{AppID:"wx11eb371cd85adfd4",ast:""}},dev:{interface:"http://api-head.wsshanghai.com",domain:"http://portrait.bdmartech.com/",cosConfig:{Bucket:"plbs-test-1257286922",Region:"ap-shanghai",SecretId:"AKIDXt0yjgKr41jBMK7YrunRpztscbJe4W2J",SecretKey:"EBsJ2WmnbgW6X3KL5Zqrc9j49G8oNgkk"},wx:{AppID:"wxb33e824504e4a764",ast:""}}},i="dev",o={Interface:{site:i,apiurl:a[i]["interface"],domain:a[i]["domain"],cosConfig:a[i]["cosConfig"],wxInfo:a[i]["wx"],addr:{getCos:"/v6/ApiBase-getCos.htm",getWeChatInfo:"/v6/ApiWeChat-getWeChatInfo.htm",getWeChatOpenId:"/v6/ApiWeChat-getWeChatOpenId.htm",getMaterialList:"/v6/ApiMaterial-getMaterialList.htm?st=logo&eCode=aleinqi",slideShow:"/v6/ApiBase-slideShow.htm?eCode=aleinqi",slideShow2:"/v6/ApiBase-slideShow.htm?id=1",headImage:"/v6/ApiCustomer-headImage.htm?eCode=aleinqi"}}};n.default=o},f92b:function(e,n,t){"use strict";var a=t("9bd0"),i=t.n(a);i.a},fa0b:function(e,n,t){"use strict";t.r(n);var a=t("bb77"),i=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=i.a}});