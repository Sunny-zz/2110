<template>
  <div class="todo-item">
    <div class="todo" v-if="true">
      <input @change="change" :checked="isCompleted" type="checkbox" name="" id="" />
      <p class="text">{{todoText}}</p>
      <span class="del" @click="del">×</span>
    </div>
    <input v-else type="text">
  </div>
</template>

<script>
import {mapActions} from 'vuex'
// mapActions  是将 store 的 action 函数制作成组件的 method
// 并且附带 dispatch 功能， 执行这个方法的时候自动会使用 dispatch 执行
export default {
  props: ['id','todoText','isCompleted'],
  methods: {
    // mapActions 会返回一个对象  对象里面就是 action 函数
    // mapActions 的参数可以使数组或者对象
    // 数组的话  ['action函数名']  给组件创建了一个同名函数
    // 对象的话  {xx: 'action函数名'} 给组件创建了一个xx函数

    ...mapActions(['delTodo', 'updateTodo']),
    del(){
      this.delTodo(this.id)
    },
    change(){
      this.updateTodo({todo: {isCompleted: !this.isCompleted}, id: this.id})
    }
  },
};
</script>

<style>
.todo{
  display: flex;
  align-items: center;
  width: 300px;
  border-top: 1px solid #ccc;
}
.todo .text{
  flex-grow: 1;
}
.todo .del {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ccc;
}
</style>