<template>
  <div>
    <TodoHead />
    <TodoList />
    <TodoFoot />
  </div>
</template>

<script>
import TodoFoot from './TodoFoot.vue'
import TodoHead from './TodoHead.vue'
import TodoList from './TodoList.vue'
export default {
  components: { TodoHead, TodoList, TodoFoot },

}
</script>

<style>

</style>