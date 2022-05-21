<template>
  <div class="todo-item">
    <!-- 制作特殊的 checkbox -->
    <label :for="id">
      <input type="checkbox" name="" :id="id" />
      <span class="iconfont icon-gouxuan"></span>
    </label>
    <div class="todo-text">
      <p :class="{completed: isCompleted}">{{todoText}}</p>
      <span @click="delTodo" class="icon-closel iconfont"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id","todoText","isCompleted"],
  methods: {
    delTodo() {
      this.$emit('del', this.id)
    }
  },
};
</script>

<style>
.todo-item {
  padding: 16px 30px 16px 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
.todo-item label {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 30px;
  color: rgb(67, 199, 155);
}
.todo-item input[type="checkbox"] {
  display: none;
}
.todo-item label span {
  display: none;
}
.todo-item input[type="checkbox"]:checked + span {
  display: inline;
}
.todo-item .todo-text {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-indent: 30px;
  font-size: 20px;
}
.todo-item .todo-text:hover span{
  display: block;
}
.todo-item .todo-text span{
  display: none;
  color: chocolate;
  font-size: 20px;
}
.todo-item .todo-text p{
  cursor: default;
}
.todo-item .todo-text p.completed {
  color: #ccc;
  text-decoration: line-through;
}
</style>