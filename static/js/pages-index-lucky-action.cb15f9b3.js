(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-lucky-action"],{"0f02":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,"uni-page-body[data-v-0da3eb48]{font-size:16px;padding:20px}.ipt[data-v-0da3eb48]{\n\t/* font-size: 32upx; */border-bottom:1px solid #ddd;width:100px;text-align:center}.lucky-act[data-v-0da3eb48],\n.lucky-value[data-v-0da3eb48]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start;padding-bottom:20px}.lk-val[data-v-0da3eb48]{padding:0 5px}.lb-row[data-v-0da3eb48]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-align-content:flex-start;align-content:flex-start;padding:10px 0}.submit[data-v-0da3eb48]{width:100%;background:#007aff;color:#fff;line-height:3;text-align:center;margin-bottom:10px}.reset[data-v-0da3eb48]{background:#999}.black-box[data-v-0da3eb48]{padding:30px 0}.row-title[data-v-0da3eb48]{\n\t/* font-size: 36upx; */font-size:16px}.longpress[data-v-0da3eb48]{width:100px;height:100px;background:#fffcfc;position:fixed;bottom:0;right:0}",""]),t.exports=i},"1a10":function(t,i,n){var e=n("0f02");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("2d976a3c",e,!0,{sourceMap:!1,shadowMode:!1})},"20df":function(t,i,n){"use strict";n("a15b"),n("d81d"),n("e25e"),n("ac1f"),n("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{lucky:1,luckyCount:1,minNum:1,pCount:200,isLucked:{},numb:[],luckyV1:"",luckyV2:"",luckyV3:"",luckyV4:"",luckyV5:"",luckyV6:"",isblack:!1,hasBlockBox:!1,blockBoxNum:"",blockBoxPW:"s12321"}},onLoad:function(t){},onShow:function(){var t=this;t.getAction(),t.getLucked(),t.getmyLuck()},onReady:function(){},components:{},methods:{longpress:function(){this.isblack=!this.isblack},ckBlockBox:function(){this.blockBoxNum==this.blockBoxPW?this.hasBlockBox=!0:this.hasBlockBox=!1},getAction:function(){var t=this;uni.getStorage({key:"rbdAction",success:function(i){t.lucky=i.data.lucky,t.luckyCount=i.data.luckyCount,t.pCount=i.data.pCount}})},getLucked:function(){var t=this;uni.getStorage({key:"rbdLucked",success:function(i){t.isLucked=i.data},fail:function(){t.isLucked={}}})},getLucky:function(t){console.log(t.detail.value)},getLuckyCount:function(t){console.log(t.detail.value)},getPCount:function(t){console.log(t.detail.value)},submit:function(){var t=this,i={lucky:t.lucky,luckyCount:t.luckyCount,pCount:t.pCount};uni.setStorage({key:"rbdAction",data:i,success:function(){uni.showToast({title:"提交成功，请刷新活动页"})}})},reset:function(){var t=this;uni.removeStorage({key:"rbdLucked",success:function(){t.getLucked()}})},getmyLuck:function(){var t=this;uni.getStorage({key:"myLuck",success:function(i){t.luckyV1=i.data.v1?i.data.v1.join(","):"",t.luckyV2=i.data.v2?i.data.v2.join(","):"",t.luckyV3=i.data.v3?i.data.v3.join(","):"",t.luckyV4=i.data.v4?i.data.v4.join(","):"",t.luckyV5=i.data.v5?i.data.v5.join(","):"",t.luckyV6=i.data.v6?i.data.v6.join(","):""},fail:function(){t.luckyV1="",t.luckyV2="",t.luckyV3="",t.luckyV4="",t.luckyV5="",t.luckyV6=""}})},confirm:function(){var t=this,i=t.luckyV1.split(","),n=t.luckyV2.split(","),e=t.luckyV3.split(","),a=t.luckyV4.split(","),u=t.luckyV5.split(","),c=t.luckyV6.split(","),l=[],s=[],o=[],v=[],k=[],d=[],r={};i.map((function(t){console.log(t),t&&l.push(parseInt(t))})),n.map((function(t){console.log(t),t&&s.push(parseInt(t))})),e.map((function(t){console.log(t),t&&o.push(parseInt(t))})),a.map((function(t){console.log(t),t&&v.push(parseInt(t))})),u.map((function(t){console.log(t),t&&k.push(parseInt(t))})),c.map((function(t){console.log(t),t&&d.push(parseInt(t))})),r={v1:l,v2:s,v3:o,v4:v,v5:k,v6:d},uni.setStorage({key:"myLuck",data:r,success:function(){uni.showToast({title:"GOOD JOB!"})}})},remore:function(){var t=this;uni.removeStorage({key:"myLuck",success:function(){t.luckyV1="",t.luckyV2="",t.luckyV3="",t.luckyV4="",t.luckyV5="",t.luckyV6="",uni.showToast({title:"已清空!"})}})}}};i.default=e},4310:function(t,i,n){"use strict";n.r(i);var e=n("20df"),a=n.n(e);for(var u in e)"default"!==u&&function(t){n.d(i,t,(function(){return e[t]}))}(u);i["default"]=a.a},"76fe":function(t,i,n){"use strict";n.r(i);var e=n("d086"),a=n("4310");for(var u in a)"default"!==u&&function(t){n.d(i,t,(function(){return a[t]}))}(u);n("d1c8");var c,l=n("f0c5"),s=Object(l["a"])(a["default"],e["b"],e["c"],!1,null,"0da3eb48",null,!1,e["a"],c);i["default"]=s.exports},d086:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return u})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"lucky-box"},[n("v-uni-view",{staticClass:"lucky-value"},[n("v-uni-view",{staticClass:"lb-row"},[t._v("一等奖, 幸运号码："),t._l(t.isLucked["v1"],(function(i,e){return t.isLucked["v1"]?[n("v-uni-text",{key:e+"_0",staticClass:"lk-val"},[t._v(t._s(i)+",")])]:t._e()}))],2),n("v-uni-view",{staticClass:"lb-row"},[t._v("二等奖, 幸运号码："),t._l(t.isLucked["v2"],(function(i,e){return t.isLucked["v2"]?[n("v-uni-text",{key:e+"_0",staticClass:"lk-val"},[t._v(t._s(i)+",")])]:t._e()}))],2),n("v-uni-view",{staticClass:"lb-row"},[t._v("三等奖, 幸运号码："),t._l(t.isLucked["v3"],(function(i,e){return t.isLucked["v3"]?[n("v-uni-text",{key:e+"_0",staticClass:"lk-val"},[t._v(t._s(i)+",")])]:t._e()}))],2),4==t.lucky||t.isLucked["v4"]?n("v-uni-view",{staticClass:"lb-row"},[t._v("四等奖, 幸运号码："),t._l(t.isLucked["v4"],(function(i,e){return t.isLucked["v4"]?[n("v-uni-text",{key:e+"_0",staticClass:"lk-val"},[t._v(t._s(i)+",")])]:t._e()}))],2):t._e(),5==t.lucky||t.isLucked["v5"]?n("v-uni-view",{staticClass:"lb-row"},[t._v("五等奖, 幸运号码："),t._l(t.isLucked["v5"],(function(i,e){return t.isLucked["v5"]?[n("v-uni-text",{key:e+"_0",staticClass:"lk-val"},[t._v(t._s(i)+",")])]:t._e()}))],2):t._e(),6==t.lucky||t.isLucked["v6"]?n("v-uni-view",{staticClass:"lb-row"},[t._v("六等奖, 幸运号码："),t._l(t.isLucked["v6"],(function(i,e){return t.isLucked["v6"]?[n("v-uni-text",{key:e+"_0",staticClass:"lk-val"},[t._v(t._s(i)+",")])]:t._e()}))],2):t._e()],1),n("v-uni-view",{staticClass:"lucky-act"},[n("v-uni-view",{staticClass:"lb-row"},[t._v("当前抽取"),n("v-uni-input",{staticClass:"ipt",attrs:{type:"number",name:"",id:""},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.getLucky.apply(void 0,arguments)}},model:{value:t.lucky,callback:function(i){t.lucky=i},expression:"lucky"}}),t._v("等奖,"),n("v-uni-input",{staticClass:"ipt",attrs:{type:"number",name:"",id:""},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.getLuckyCount.apply(void 0,arguments)}},model:{value:t.luckyCount,callback:function(i){t.luckyCount=i},expression:"luckyCount"}}),t._v("名。")],1),n("v-uni-view",{staticClass:"lb-row"},[t._v("参与人数"),n("v-uni-input",{staticClass:"ipt",attrs:{type:"number",name:"",id:""},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.getPCount.apply(void 0,arguments)}},model:{value:t.pCount,callback:function(i){t.pCount=i},expression:"pCount"}}),t._v("名")],1)],1),n("v-uni-view",{staticClass:"submit",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit.apply(void 0,arguments)}}},[t._v("确认")]),n("v-uni-view",{staticClass:"submit reset",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.reset.apply(void 0,arguments)}}},[t._v("清空抽奖")]),n("v-uni-view",{staticClass:"black-box"},[t.isblack?n("v-uni-view",{staticClass:"lucky-act"},[n("v-uni-view",{staticClass:"lb-row"},[n("v-uni-input",{staticClass:"ipt",attrs:{type:"text",name:"",id:""},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.ckBlockBox.apply(void 0,arguments)}},model:{value:t.blockBoxNum,callback:function(i){t.blockBoxNum=i},expression:"blockBoxNum"}})],1)],1):t._e(),n("v-uni-view",{staticClass:"longpress",on:{longpress:function(i){arguments[0]=i=t.$handleEvent(i),t.longpress.apply(void 0,arguments)},dblclick:function(i){arguments[0]=i=t.$handleEvent(i),t.longpress.apply(void 0,arguments)}}}),t.hasBlockBox?[n("v-uni-view",{staticClass:"lb-row row-title"},[t._v("暗箱")]),n("v-uni-view",{staticClass:"lb-row"},[t._v("一等奖号"),n("v-uni-input",{staticClass:"ipt",attrs:{type:"text",name:"",id:""},model:{value:t.luckyV1,callback:function(i){t.luckyV1=i},expression:"luckyV1"}})],1),n("v-uni-view",{staticClass:"lb-row"},[t._v("二等奖号"),n("v-uni-input",{staticClass:"ipt",attrs:{type:"text",name:"",id:""},model:{value:t.luckyV2,callback:function(i){t.luckyV2=i},expression:"luckyV2"}})],1),n("v-uni-view",{staticClass:"lb-row"},[t._v("三等奖号"),n("v-uni-input",{staticClass:"ipt",attrs:{type:"text",name:"",id:""},model:{value:t.luckyV3,callback:function(i){t.luckyV3=i},expression:"luckyV3"}})],1),n("v-uni-view",{staticClass:"submit",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.confirm.apply(void 0,arguments)}}},[t._v("确认")]),n("v-uni-view",{staticClass:"submit reset",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.remore.apply(void 0,arguments)}}},[t._v("清空暗箱")])]:t._e()],2)],1)},u=[]},d1c8:function(t,i,n){"use strict";var e=n("1a10"),a=n.n(e);a.a}}]);