import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

// 组件内获取 store 相关内容的时候可以使用一些辅助函数
// state   mapState
// mutation mapMutations
// action mapActions
const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    // mutation 函数只能是同步的
    getTodos(state, todos) {
      state.todos = todos
    },
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    delTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    updateTodo(state, updateTodo){
      Object.assign(state.todos.find(todo => todo.id === updateTodo.id), updateTodo)
      // state.todos.find(todo => todo.id === updateTodo.id) = newTodo
    }
  },
  // 当修改 state 需要异步操作修改的话， 那么就需要将 异步操作写在 actions 内
  // 那么 actions 内的 action 函数 其实会对应一个或多个 mutation 函数
  // action 函数异步执行完毕之后需要使用 commit 执行 mutation 函数去处理对应 state 
  // 一般一个逻辑的 action 和 mutation 名字是相同的

  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者使用 解构赋值方式获取 commit

  // 在组件内需要使用 $store.dispatch 触发 action 函数， 
  // action 函数也只能接收两个参数 第一个是默认的 context  第二个是 载荷数据
  actions: {
    async getTodos({ commit }) {
      const res = await axios.get('http://localhost:3008/todos')
      commit('getTodos', res.data)
    },
    async addTodo({ commit }, { todo, callback }) {
      const res = await axios.post('http://localhost:3008/todos', todo)
      commit('addTodo', res.data)
      callback()
    },
    async delTodo({ commit }, id) {
      await axios.delete(`http://localhost:3008/todos/${id}`)
      commit('delTodo', id)
    },
    async updateTodo({commit}, {todo, id}) {
      await axios.patch(`http://localhost:3008/todos/${id}`, todo)
      // todo 里面存的是修改的数据 
      commit('updateTodo', {...todo, id})
    }
  }
})

export default store



// 添加功能  给 todos 新增一项

// 新增 action ， 注意请求是否需要传参  参数需要 用户的输入内容

// 新增 mutation

// store 逻辑完毕

// 组件内

// 点击确定 获取输入内容 调用 action

// 添加 todo 接口
// 方法 post
// 参数 {todoText: xxx, isCompleted: false}
// 地址 http://localhost:3008/todos
// 返回值 {todoText: xxx, isCompleted: false, id: 'xxx'}

// 修改  patch  http://localhost:3008/todos/id {todoText: xxx, isCompleted: false}