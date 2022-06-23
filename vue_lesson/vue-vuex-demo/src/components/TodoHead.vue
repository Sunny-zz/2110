<template>
  <div class="todo-head">
    <input v-model.trim="todoText" type="text">
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  computed: {
    todoText: {
      get(){
        return this.$store.state.todoText
      },
      set(text){
        this.$store.commit('changeTodoText', text)
      }
    }
  },
  methods: {
    add() {
      const {todoText} = this
      if(todoText){
        this.$store.dispatch({
          type: 'addTodo',
          todo: { todoText , isCompleted: false}
        })
      }
    }
  },
}
</script>

<style>

</style>