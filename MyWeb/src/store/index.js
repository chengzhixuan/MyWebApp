/**
 * Created by gupo-03 on 2017/5/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import user from './modules/user'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  module: {
    user
  },
  strict: debug, // 判断是否是开发环境 是的话开启严格
  plugin: debug ? [createLogger()] : [] // 判断是否是开发环境 是的话开启日志
})
