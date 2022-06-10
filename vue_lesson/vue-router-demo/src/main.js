import Vue from 'vue'
import App from './App.vue'
// 如果路径最后是 index 可以省略 自动会解析成 index.js
import router from './router'
import './ajax/http'
import vueMoment from 'vue-moment'
// 默认 vueMoment 会自动创建一个全局过滤器来实现日期格式化
// 但是我们要切换成中文 需要额外下载 moment 包，并导入对应的语言 在 use 的时候添加配置
import moment from 'moment'
import 'moment/locale/zh-cn'
Vue.config.productionTip = false

Vue.use(vueMoment, {moment});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
