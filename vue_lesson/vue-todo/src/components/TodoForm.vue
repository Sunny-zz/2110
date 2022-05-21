<template>
  <div class="todo-form">
    <i class="icon-xiala iconfont"></i>
    <input
      type="text"
      v-model.trim="todoText"
      placeholder="What needs to be done?"
      @keydown.13="addTodo"
    />
  </div>
</template>

<script>
import request from "../plugins/request";
export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    // TodoForm 要更新  TodoList 组件的 数据 todos
    // 两个组件是兄弟关系
    async addTodo() {
      // console.log('添加待办事项')
      // 获取输入内容， 向后端发添加请求，请求成功之后更新 todos 数组，请空输入内容
      const todoText = this.todoText;
      if (todoText) {
        const res = await request.post("/todos", {
          todoText,
          isCompleted: false,
        });
        // console.log(res)
        this.$emit('add',res)
        this.todoText = ''
      } else {
        console.log("请输入内容");
      }
    },
  },
};
</script>

<style>
.todo-form {
  display: flex;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  align-items: center;
}

.todo-form i {
  padding: 16px;
  font-size: 24px;
  flex-shrink: 0;
}

.todo-form input {
  flex-grow: 1;
  padding: 16px;
  font-size: 24px;
  line-height: 1.5;
  border: 0;
  outline: 0;
}
</style>