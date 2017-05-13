/**
 * Created by gupo-03 on 2017/5/10.
 */
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_ROOT
})
// 请求拦截
api.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截
api.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})
export default api
