import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
// 导入所有 组件的样式
// import 'element-ui/lib/theme-chalk/index.css'

// import ElementUi from 'element-ui'
Vue.config.productionTip = false


// Vue.use(ElementUi)

new Vue({
  render: h => h(App),
}).$mount('#app')


//element ui 的使用
// 1. 安装 npm i element-ui
// 2. 引入 element  
    // a. 全局引入
    // 先全局引入 css
    // use(ElementUi)

    // b. 按需引入