import Vue from 'vue'
import App from './App.vue'
import './ajax/http'
import './registerGlobalComponent'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
