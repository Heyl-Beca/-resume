import axios from 'axios'
import config from '../config/index' // 路径配置

// 创建axios实例 配置
const service = axios.create({
  baseURL: config.baseURL, // api 的base_url
  timeout: 10000 // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(
  config => {
    // 此处可定义一些config配置
    // ...
    return config
  },
  error => {
    // 此处处理一些请求出错的情况
    // ...
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 此处处理一些response 正常回放时的逻辑
    return res
  },
  error => {
    // 此处处理一下response出错时的逻辑
    return Promise.reject(error)
  }
)

export default service
