import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo : null
  },
  mutations: {
    getUserInfo(state, userInfo){
      state.userInfo = userInfo
    }
  },
  actions: {
    getUserInfo({commit}){
      const userInfo = localStorage.getItem('userInfo')
      if(userInfo){
        commit('getUserInfo', JSON.parse(userInfo))
      }
    }
  }
})

export default store