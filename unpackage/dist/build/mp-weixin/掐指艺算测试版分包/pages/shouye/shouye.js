require('../../common/runtime.js');require('../../common/vendor.js');require('../../common/main.js');(global["webpackJsonp_掐指艺算测试版分包"]=global["webpackJsonp_掐指艺算测试版分包"]||[]).push([["pages/shouye/shouye"],{"068a":function(t,i,n){"use strict";var e=n("bb5d"),a=n.n(e);a.a},"1abf":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n("8023"),a=function(){n.e("components/index/yikaoDongtai").then(function(){return resolve(n("5fc0"))}.bind(null,n)).catch(n.oe)},o=function(){n.e("components/index/yikaoKecheng").then(function(){return resolve(n("201e"))}.bind(null,n)).catch(n.oe)},s={components:{yikaoDongtai:a,yikaoKecheng:o},data:function(){return{input_value:"",inputs_text:"",placeholders:"搜索快讯",placeholders_styles:"iconfont icon-sousuo",swipers:[],isactive:!0,isactive1:!1,isactive2:!1,phoneHeight:0,yikaoDongtaiStatus:!0,yikaoKechengStatus:!1,yikaoTikuStatus:!1,yikaiDongtaiList:[],currentPage:1}},onLoad:function(){this.getWindowHeight(),this.getLunboLists(),this.getyikaoDongtaiLists()},methods:{mores:function(){var i=this,n=this.currentPage,a=4;n+=1,(0,e.getmoreList)(n,a).then((function(e){if(console.log(e.data.artexamdynamicList),"页码超出了哦!"==e.data.msg)return e.data.msg;i.yikaiDongtaiList=i.yikaiDongtaiList.concat(e.data.artexamdynamicList),i.currentPage=n,t.setStorage({key:"yikaoDongtaiList",data:i.yikaiDongtaiList})}))},getyikaoDongtaiLists:function(){var i=this;(0,e.getyikaoDongtaiList)().then((function(n){console.log(n.data.artexamdynamicList),i.yikaiDongtaiList=n.data.artexamdynamicList,t.setStorage({key:"yikaoDongtaiList",data:i.yikaiDongtaiList})}))},getLunboLists:function(){var t=this;(0,e.getLunboList)().then((function(i){console.log(i.data.banners),t.swipers=i.data.banners}))},getWindowHeight:function(){var i=this;t.getSystemInfo({success:function(t){i.phoneHeight=t.windowHeight}})},yikaokecheng_click:function(){t.navigateTo({url:"../yikaokecheng_item/yikaokecheng_item"})},zhenti_next:function(){t.navigateTo({url:"../yikaotimu_danxuan/yikaotimu_danxuan"})},yikaiTiku:function(){this.isactive=!1,this.isactive1=!1,this.isactive2=!0,this.yikaoDongtaiStatus=!1,this.yikaoKechengStatus=!1,this.yikaoTikuStatus=!0},yikaoKecheng:function(){console.log(1111),this.isactive=!1,this.isactive1=!0,this.isactive2=!1,this.yikaoDongtaiStatus=!1,this.yikaoKechengStatus=!0,this.yikaoTikuStatus=!1},yikaoDongtai2:function(){this.isactive=!0,this.isactive1=!1,this.isactive2=!1,this.yikaoDongtaiStatus=!0,this.yikaoKechengStatus=!1,this.yikaoTikuStatus=!1},yikaoDongtai:function(i){console.log(i),t.navigateTo({url:"../yikaoxiangqing/yikaoxiangqing?id="+i})},getInput:function(t){this.input_value=t.target.value},getInput2:function(t){console.log(t.target.value),this.inputs_text=t.target.value},getFocus:function(){this.placeholders="",this.placeholders_styles=""},getBlur:function(){this.placeholders="搜索快讯",this.placeholders_styles="iconfont icon-sousuo"},getSubmit:function(){console.log(111),this.Searchs()},Searchs:function(){console.log(this.inputs_text),t.request({url:"".concat(this.$serverUrl,"api/TestSearchPost"),method:"POST",contentType:"application/json;charset=UTF-8",data:{content:this.inputs_text}}).then((function(t){console.log(t)}))}}};i.default=s}).call(this,n("543d")["default"])},3901:function(t,i,n){"use strict";n.r(i);var e=n("1abf"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},"6bf8":function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement;t._self._c},o=[]},bb5d:function(t,i,n){},de39:function(t,i,n){"use strict";(function(t){n("b0fd");e(n("66fd"));var i=e(n("fbe6"));function e(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("543d")["createPage"])},fbe6:function(t,i,n){"use strict";n.r(i);var e=n("6bf8"),a=n("3901");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("068a");var s,c=n("f0c5"),u=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);i["default"]=u.exports}},[["de39","common/runtime","common/vendor"]]]);