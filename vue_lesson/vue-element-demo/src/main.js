import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import './assets/style.css'
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








    // vue ui组件库
    // element ui 安装
    // npm i element-ui
    // 1. 全局   引入 css  use(ElementUi)
    // 2. 按需   babel-component-plugin  修改 babel 配置()        需要哪些组件 引入哪些 并且 use

    // 组件的使用
    // 有现成的例子先看例子
    // 根据文档查看  属性(组件的props)  或者   事件(组件的自定义事件, 注意回调参数)   或者   插槽    