// 类型模块
// 每一各模块都是一个对象

 const type = {
  state: () => ({
    type: 'all'
  }),
  mutations: {
    changeType(state, type){
      state.type = type
    }
  },

 }

 export default type