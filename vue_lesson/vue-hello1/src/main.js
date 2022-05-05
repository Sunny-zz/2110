// 导入模块
// 1. import Vue from 'vue'   导入了一个 Vue 类用于初始化 vue 项目
// 2. import App from './App.vue'  导入了 App.vue 
// .vue 后缀的文件是 vue 组件，也是一个模块， 环境支持导入导出   App.vue 是项目的最大组件，可以认为项目内页面的body中只有 app 这个组件(div)
import Vue from 'vue'
import App from './App.vue'
// css 可以直接在 main中导入 因为环境支持 css 可以当做模块
import './assets/rest.css'

// 3. Vue.config.productionTip = false   关闭 vue 的生产提示
Vue.config.productionTip = false

// 4. 初始化项目  new Vue()    将 App 组件的所有内容 渲染到页面的 #app 标签中
new Vue({
  render: h => h(App),
}).$mount('#app')
