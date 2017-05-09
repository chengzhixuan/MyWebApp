// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// HTTP配置（可选）
// 让vue实例直接调用axios
// 例：this.$http.get(...)
import axios from 'axios'
Vue.prototype.$http = axios

// 低版本Promise兼容
import Promise from 'es6-promise'
Promise.polyfill()

// Mock模拟数据
import './api/mock'
// Vuex配置
import store from './store'
// UI配置
import element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(element)

// 自定义Directives
import './directives'

// 自定义Filters
import './filters'

// 自定义的全局方法
import pubmethod from './pubmethod'
Vue.prototype.pubmethod = pubmethod

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
