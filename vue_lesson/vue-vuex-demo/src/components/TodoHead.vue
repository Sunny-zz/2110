<template>
  <div class="todo-head">
    <input v-model.trim="todoText" type="text">
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: ''
    }
  },
  methods: {
    add() {
      const {todoText} = this
      if(todoText){
        this.$store.dispatch({
          type: 'addTodo',
          todo: { todoText , isCompleted: false},
          callback: () => {
            console.log('清空')
            this.todoText = ''
          }
        })
      }
    }
  },
}
</script>

<style>

</style>