import Vue from 'vue'
import App from './App.vue'
import './assets/reset.less'
import './plugins/element'
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


// 如何将 vue 项目 运行到外网服务器(github,  gitee)
// vue 的部署
// 1. 修改路由模式为 hash(现阶段的服务器都是别人的， 如果使用 history 的话会出问题)
// 因为服务器访问一个地址的话 默认是找当前地址的 html , 我们只有 首页 index.html，所以其他页面刷新就会 404
// 需要对服务器进行配置，将所有的地址重新指向根目录下 index.html

// 2. 当你的项目部署到二级地址的时候(不是根目录的), 需要配置 publicPath (vue.config.js) 值是 二级地址路径

// 3. 打包编译成 html css js   npm  run  build

// 4. 将编译好的上传 即可