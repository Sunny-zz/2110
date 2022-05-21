<template>
  <div class="todo-list" v-if="todos.length">
    <TodoItem v-for="todo in todos" :key="todo.id" v-bind="todo" @del='(id) => $emit("del", id)' />
  </div>
  <div v-else><img style="width: 100%" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180509%2F82fef609b32a4efa89b3608c02628d1e.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655708168&t=1022d2e61e3b1a99a1c1514dc0c44320" alt=""></div>
</template>

<script>

import TodoItem from './TodoItem.vue'
export default {
  components: { TodoItem },
  props: ['todos']
}
</script>

<style>

</style>