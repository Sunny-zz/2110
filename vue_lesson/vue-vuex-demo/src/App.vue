<template>
  <div>
    <h2>todo</h2>
    <TodoDemo/>
    <button @click="$store.commit('getTodos')">测试</button>
  </div>
</template>

<script>
import TodoDemo from './components/TodoDemo.vue'
export default {  
  components: {
    TodoDemo,
  },
}
</script>

<style>

</style>