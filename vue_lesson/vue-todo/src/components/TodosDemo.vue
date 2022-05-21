<template>
  <div class="todos-demo">
    <h3>todos</h3>
    <TodoForm @add="add" />
    <TodoList :todos="todos" @del='del' />
    <TodoFooter />
  </div>
</template>

<script>
import request from "../plugins/request";
import TodoFooter from "./TodoFooter.vue";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
export default {
  components: { TodoForm, TodoList, TodoFooter },
  data() {
    return {
      todos: [],
    };
  },
  async created() {
    // 项目中用到很多 axios 请求，一般都会对 axios 进行封装
    const res = await request.get("/todos");
    // console.log(res)
    this.todos = res;
  },
  methods: {
    add(todo) {
      this.todos.push(todo);
    },
    async del(id) {
      await request.delete(`/todos/${id}`);
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
.todos-demo {
  width: 550px;
  margin: 40px auto;
  background-color: #fff;
  box-shadow: 0px 0px 8px #ccc;
}
.todos-demo h3 {
  text-align: center;
  margin-bottom: 20px;
  padding-top: 20px;
  font-size: 40px;
  font-weight: bold;
}
</style>