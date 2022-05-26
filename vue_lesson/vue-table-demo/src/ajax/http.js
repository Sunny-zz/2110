import axios from 'axios'
import Vue from 'vue'
const http = axios.create({
  baseURL: 'http://localhost:3008',
  timeout: 1000
})

// 响应拦截器
http.interceptors.response.use((res) => {
  return res.data
})


// export default http
Vue.prototype.$http = http 
// 在 vue 全局下(整个项目中)都可能会使用这个 http 请求
// 那么可以直接使用  Vue.prototype.$http = http     属性名一般用 $ 做前缀
// 这样的话  Vue 的原型中就拥有了 http，那么所有的 vue 实例(vue 组件)就可以直接访问 http 了
// 话句话说 组件内 直接使用  this.$http  就是  http 

// 需要将该文件运行才能在任何地方使用  this.$http  
// 那么就需要引入到 main.js