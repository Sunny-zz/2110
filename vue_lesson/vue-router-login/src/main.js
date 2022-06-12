import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding) {
    const {value , arg, modifiers} = binding
    // arg 是指令参数    v-focus:xx   xx 就是参数
    console.log(arg)
    console.log(modifiers)
    if(value || value === undefined){
      el.focus()
    }
  },
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
