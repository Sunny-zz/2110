// todos 模块
import axios from 'axios'
const GET_TODOS = 'GET_TODOS'
const todos = {
  state: () => ({
    todos: []
  }),
  mutations: {
    [GET_TODOS](state, todos) {
      state.todos = todos
    },
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    delTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    updateTodo(state, updateTodo) {
      Object.assign(state.todos.find(todo => todo.id === updateTodo.id), updateTodo)
      // state.todos.find(todo => todo.id === updateTodo.id) = newTodo
    },
  },
  actions: {
    async getTodos(context) {
      const { commit } = context
      console.log(context)
      const res = await axios.get('http://localhost:3008/todos')
      commit(GET_TODOS, res.data)
    },
    async addTodo({ commit }, { todo }) {
      const res = await axios.post('http://localhost:3008/todos', todo)
      commit('addTodo', res.data)
      commit('changeTodoText', '')
    },
    async delTodo({ commit }, id) {
      await axios.delete(`http://localhost:3008/todos/${id}`)
      commit('delTodo', id)
    },
    async updateTodo({ commit }, { todo, id }) {
      await axios.patch(`http://localhost:3008/todos/${id}`, todo)
      console.log('更新成功')
      // todo 里面存的是修改的数据 
      commit('updateTodo', { ...todo, id })
    }
  },
  getters: {
    // 模块的计算属性， 如果需要使用 store 其他数据 或者其他的 getter 的话，可以给 getters 传递三个参数分别是 state  getters rootState
    activeNum({todos}){
      return todos.filter(todo => !todo.isCompleted).length
    }
  }
 }

 export default todos