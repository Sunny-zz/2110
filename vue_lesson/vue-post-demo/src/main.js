import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import 'moment/locale/zh-cn'
import vueMoment from 'vue-moment'
import './js/http'
import './js/filter'
Vue.config.productionTip = false

Vue.use(vueMoment, {
  moment
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
