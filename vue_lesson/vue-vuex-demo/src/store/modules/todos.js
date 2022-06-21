// todos 模块
import axios from 'axios'
const todos = {
  state: () => ({
    todos: []
  }),
  mutations: {
    getTodos(state, todos) {
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
    async updateTodo({ commit }, { todo, id }) {
      await axios.patch(`http://localhost:3008/todos/${id}`, todo)
      console.log('更新成功')
      // todo 里面存的是修改的数据 
      commit('updateTodo', { ...todo, id })
    }
  },
  getters: {
    activeNum({todos}){
      return todos.filter(todo => !todo.isCompleted).length
    }
  }
 }

 export default todos