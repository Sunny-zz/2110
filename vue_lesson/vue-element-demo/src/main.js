import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import './assets/style.less'
// 导入所有 组件的样式
// import 'element-ui/lib/theme-chalk/index.css'

// import ElementUi from 'element-ui'
Vue.config.productionTip = false


// Vue.use(ElementUi)

new Vue({
  render: h => h(App),
}).$mount('#app')


// vue 组件样式

//   scoped  样式私有化给所有的元素添加 data-v-xxxx   不包括子组件内的元素

//   /deep/

// 可以使用插件来写样式    css 预处理语言  (高级的 css 语法)  ---->  scss  less   
// 需要安装对应的插件才能使用
// 使用 scss
// - 安装插件   node-sass  sass-loader    sass-loader 8 以上不需要安装 node-sass

// 使用 less
// - 安装插件   less  less-loader 
