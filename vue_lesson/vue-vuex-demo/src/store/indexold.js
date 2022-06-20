// vuex 的创建
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


// 创建

// store 用来存数共享数据的
const store = new Vuex.Store({
  // state 放的是共享数据
  state: {
    count: 0,
    msg: 'hello'
  },
  // mutations  修改 store 数据的方法
  // mutation 函数默认接收 state(数据) 作为参数
  // 函数内直接对 state 进行修改即可
  mutations: {
    addCount(state){
      state.count ++ 
    },
    subCount(state){
      state.count -- 
    },
    // mutation 函数 只能传递两个参数
    // state 是第一个参数
    // 一般第二个参数叫做  payload
    // 可以将第二个参数写成对象形式
    changeCount(state, {num1, num2}){
      state.count = num1 + num2
    }
  }
})

// 使用 
// 1. main 导入 添加到 new Vue 中
// 2. 组件内 直接使用  this.$store.state

export default store


// 修改 store 数据的流程
// 1. 创建 mutation 函数
// 2. 组件内通过 commit 调用 mutation 函数