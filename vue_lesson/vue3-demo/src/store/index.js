import {createStore} from 'vuex'

const store = createStore({
  state: {
    number: 100
  },
  mutations: {
    changeNumber(state, num){
      state.number = num
    }
  },
  actions: {
    changeNumber({commit}, num){
      setTimeout(()=> {
        commit('changeNumber', num)
      }, 500)
    }
  }
})

export default store