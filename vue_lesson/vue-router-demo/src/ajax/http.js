import axios from 'axios'
import Vue from 'vue'

const instance = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 2000
})

// 响应拦截器
instance.interceptors.response.use( (res) => res.data )

// 制作成 vue 全局
Vue.prototype.$http = instance
