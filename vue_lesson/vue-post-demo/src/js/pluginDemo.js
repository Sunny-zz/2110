// 通过 Vue.use 来添加全局功能
// 比如添加一个 全局过滤器
import Vue from 'vue'
// import VueRouter from 'vue-router'
// console.log(VueRouter)
const myPlugin = {
  install(_Vue) {
    _Vue.filter('timeFormat',
      (time) => {
        console.log(time)
        return '10:00'
      }
    )
  }
}

Vue.use(myPlugin)