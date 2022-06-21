<template>
  <div class="todo-list" v-if="todos.length">
    <TodoItem @changeEditId="changeEditId" v-bind="{...todo, editId}" v-for="todo in todos" :key="todo.id" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoItem from './TodoItem.vue'
export default {
  components: { TodoItem },
  computed: {
    // todos() {
    //   return this.$store.getters.showTodos
    // }
    // ...mapGetters(['showTodos']),
    ...mapGetters({
      todos: 'showTodos'
    })
  },
  data() {
    return {
      editId: ''
    }
  },
  created () {
    this.$store.dispatch('getTodos')
  },
  methods: {
    changeEditId(id) {
      this.editId = id
    }
  },
}
</script>

<style>

</style>