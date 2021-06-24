import Vue from 'vue'
import App from './App'
import {myRequest} from './api/http.js'

Vue.config.productionTip = false
//后端接口地址
Vue.prototype.$serverUrl='http://localhost:8090/'

Vue.prototype.$myRequest = myRequest
// 挂载封装的request


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
