require('../../common/runtime.js');require('../../common/vendor.js');require('../../common/main.js');(global["webpackJsonp_掐指艺算"]=global["webpackJsonp_掐指艺算"]||[]).push([["pages/gerenzhongxin/gerenzhongxin"],{"1f3b":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;t("8023");var o={data:function(){return{imgArr:["../../static/img/touxiang_img.png"],phoneHeight:0,userData:{avatarUrl:"../../static/img/gerenzhongxin_moren_logo.png",nickName:"登录/注册"},isShow:!0}},methods:{test:function(){n.navigateTo({url:"../test/test"})},getWindowHeight:function(){var e=this;n.getSystemInfo({success:function(n){e.phoneHeight=n.windowHeight}})},exitLogin:function(){n.showModal({title:"温馨提示",content:"您要退出登录吗？",success:function(e){e.confirm?(console.log("用户点击确定"),n.removeStorage({key:"userData"}),n.reLaunch({url:"../gerenzhongxin/gerenzhongxin"})):e.cancel&&console.log("用户点击取消")}})},click_shouquan:function(){n.navigateTo({url:"../index/index"})},guanyuwomeng:function(){n.navigateTo({url:"../guanyuwomeng/guanyuwomeng"})},yijianFangkui:function(){n.navigateTo({url:"../yijianFangkui/yijianFangkui"})},xiugai:function(){n.navigateTo({url:"../gerenzhongxin_update/gerenzhongxin_update"})}},onLoad:function(){},onShow:function(){var e=n.getStorageSync("userData");console.log(e.userInfo);var t=e.userInfo;this.userData=t,null!=t&&(this.isShow=!1)},onShareAppMessage:function(e){var t="掐指艺算";n.getStorageSync("login_info");return{title:t,path:"pages/shouye/shouye"}}};e.default=o}).call(this,t("543d")["default"])},"570f":function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var a=function(){var n=this,e=n.$createElement;n._self._c},i=[]},"84eb":function(n,e,t){"use strict";var o=t("c6ca"),a=t.n(o);a.a},9844:function(n,e,t){"use strict";t.r(e);var o=t("1f3b"),a=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=a.a},a9aa:function(n,e,t){"use strict";(function(n){t("b0fd");o(t("66fd"));var e=o(t("c68d"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},c68d:function(n,e,t){"use strict";t.r(e);var o=t("570f"),a=t("9844");for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("84eb");var u,r=t("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"47092abe",null,!1,o["a"],u);e["default"]=c.exports},c6ca:function(n,e,t){}},[["a9aa","common/runtime","common/vendor"]]]);