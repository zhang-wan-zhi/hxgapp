require('../../common/runtime.js');require('../../common/vendor.js');require('../../common/main.js');(global["webpackJsonp_掐指艺算测试版分包"]=global["webpackJsonp_掐指艺算测试版分包"]||[]).push([["pages/index/index"],{"2ba2":function(n,e,t){},"3b1c":function(n,e,t){"use strict";t.r(e);var o=t("fb2b"),c=t("edec");for(var u in c)"default"!==u&&function(n){t.d(e,n,(function(){return c[n]}))}(u);t("b0ca");var a,i=t("f0c5"),r=Object(i["a"])(c["default"],o["b"],o["c"],!1,null,"0089dc43",null,!1,o["a"],a);e["default"]=r.exports},"5b23":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;t("eccd"),t("8023");var o={data:function(){return{userInfo:[]}},onLoad:function(){},methods:{getInfo:function(){var e=this;n.request({url:"".concat(this.$serverUrl,"api/TestGet"),method:"POST",contentType:"application/json;charset=UTF-8"}).then((function(n){console.log(n),console.log(n[1].data.data[0].username),e.title=n[1].data.data[0].username}))},wechatLogin:function(){n.switchTab({url:"../shouye/shouye"}),n.login({provider:"weixin",success:function(e){console.log(e),console.log("wxcode",e.code);e.code;n.getUserInfo({provider:"weixin",success:function(e){console.log(e),n.switchTab({url:"../shouye/shouye"})},fail:function(n){}})},fail:function(n){}})}}};e.default=o}).call(this,t("543d")["default"])},b0ca:function(n,e,t){"use strict";var o=t("2ba2"),c=t.n(o);c.a},c3db:function(n,e,t){"use strict";(function(n){t("b0fd");o(t("66fd"));var e=o(t("3b1c"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},edec:function(n,e,t){"use strict";t.r(e);var o=t("5b23"),c=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=c.a},fb2b:function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}));var c=function(){var n=this,e=n.$createElement;n._self._c},u=[]}},[["c3db","common/runtime","common/vendor"]]]);