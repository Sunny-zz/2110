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
  }
})

export default store