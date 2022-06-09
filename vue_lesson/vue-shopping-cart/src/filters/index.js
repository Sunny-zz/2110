// 全局过滤器
import Vue from 'vue'
Vue.filter('formatValue', function (value) {
  return value.toFixed(2)
})
