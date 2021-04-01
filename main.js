import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//后端接口地址
Vue.prototype.$serverUrl='http://localhost:8090/'

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
