import Vue from 'vue'
import App from './App.vue'
import './js/index'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
