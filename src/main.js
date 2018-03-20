// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
// Vue.use(pidCrypt)
// Vue.use(md5)

// 替换原生http
import axios from 'axios'
Vue.prototype.$http = axios
// 开发环境
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8080/re'
} else {
  // 生产环境
  axios.defaults.baseURL = 'http://localhost:8080/re'
}


Vue.config.productionTip = false
//  导入vux模块
import { LoadingPlugin, Actionsheet, AlertPlugin, ConfirmPlugin, ToastPlugin, XInput } from 'vux'

// 导入模块后必须进行use（）后才能使用，在页面使用时，直接import即可
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(Actionsheet)
Vue.use(XInput)

// 使用微信的jssdk
// import { WechatPlugin } from 'vux'
// Vue.use(WechatPlugin)
// console.log(Vue.wechat)
//  那么之后任何组件中都可以通过 this.$wechat 访问到 wx 对象

import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)
// console.log(Vue.http)


import store from './store/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
