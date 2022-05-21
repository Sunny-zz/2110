// 封装 axios 
// 封装一般有两种做法
// 1. 直接对 axios 进行封装
// 2. 创建一个新的 axios 实例
// axios.create()  会创建一个 axios 实例
import axios from 'axios'

// 创建的时候需要 提供一些参数
const request = axios.create({
  // 请求基地址
  baseURL: 'http://localhost:3008',
  // 请求超时的时间
  timeout: 3000,
  // 请求头设置 
  // headers: {'X-Custom-Header': 'foobar'}
})

// 我们后端返回的数据全部放在 res.data 内
// 可以使用 响应拦截器 控制 axios 请求 的返回值
// 响应拦截器： 拦截 axios 请求回来的响应，处理完之后在返回
request.interceptors.response.use(function (res) {
  return res.data
})

export default request