// 封装 axios 
import axios from 'axios'

// 基础配置
const http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 3000,
  // 请求头设置
  headers: {
    get: {
      // contentType: ''
    },
    post: {
      // contentType: ''
    }
  }
})
// 拦截器配置

// 请求拦截器   
// 一般在工作中 需要在请求头中添加 token 字段
// token 字段是登录的时候 登录成功之后 返回的字段
// 除了登录请求之外的请求 可能都是需要 token 字段的
// 管理系统必须设置 token，添加到请求头中即可
http.interceptors.request.use(config => {
  // const token = window.localStorage.getItem('token')
  // if(token) config.authToken = token

  // 其他请求头设置
  return config
}) 
// 响应拦截器
http.interceptors.response.use(res => {
  // if(res.data.code === -100){
  //   res.data.errMsg = '请购买'
  // }
  return res.data
})



export default http

 