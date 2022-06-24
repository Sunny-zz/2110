import Vue from 'vue'
import App from './App.vue'
import './assets/reset.less'
import './plugins/element'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
