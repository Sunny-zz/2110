import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    // mutation 函数只能是同步的

    // 异步操作可以放到 actions 内
    async getTodos(state){
      const res = await axios.get('http://localhost:3008/todos')
      console.log(res)
      state.todos = res.data
    }
  }
})

export default store