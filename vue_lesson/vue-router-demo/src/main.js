import Vue from 'vue'
import App from './App.vue'
// 如果路径最后是 index 可以省略 自动会解析成 index.js
import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
