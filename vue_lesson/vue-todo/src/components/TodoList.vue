<template>
  <div class="todo-list" v-if="showTodos.length">
    <TodoItem
      v-for="todo in showTodos"
      :key="todo.id"
      v-bind="todo"
      @del="(id) => $emit('del', id)"
      @changeTodo="(id) => $emit('changeTodo', id)"
      :editId="editId"
      @changeEditId="(id) => $emit('changeEditId', id)"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
  props: ["showTodos", "editId"],
};
</script>

<style>
</style>