import axios from 'axios'
import Vue from 'vue'
const http =  axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 2000
})

http.interceptors.response.use(res => res.data)

Vue.prototype.$http = http