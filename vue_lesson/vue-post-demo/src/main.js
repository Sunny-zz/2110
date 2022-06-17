import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import 'moment/locale/zh-cn'
import vueMoment from 'vue-moment'
import './js/http'
import './js/filter'
import './js/pluginDemo'
import './js/renderFunction'
// import './js/mixin'
Vue.config.productionTip = false

Vue.use(vueMoment, {
  moment
})
Vue.a = 100
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
