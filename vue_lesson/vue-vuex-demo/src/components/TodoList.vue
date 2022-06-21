<template>
  <div class="todo-list" v-if="todos.length">
    <TodoItem v-bind="todo" v-for="todo in todos" :key="todo.id" />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  components: { TodoItem },
  computed: {
    todos() {
      return this.$store.state.todos 
    }
  },
  created () {
    this.$store.dispatch('getTodos')
  },
}
</script>

<style>

</style>