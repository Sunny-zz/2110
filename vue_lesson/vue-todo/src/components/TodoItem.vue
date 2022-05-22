<template>
  <div class="todo-item">
    <!-- 制作特殊的 checkbox -->
    <label v-if="editId !== id" :for="id">
      <input
        @change="change"
        :checked="isCompleted"
        type="checkbox"
        name=""
        :id="id"
      />
      <span class="iconfont icon-gouxuan"></span>
    </label>
    <div v-else style="width:30px"></div>
    <div class="todo-text">
      <template v-if="editId !== id">
        <p @dblclick="handleDblclick" :class="{ completed: isCompleted }">{{ todoText }}</p>
        <span @click="delTodo" class="icon-closel iconfont"></span>
      </template>
      <input ref='inp' v-else type="text" :value="todoText" @blur="changeTodoText" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "todoText", "isCompleted", "editId"],
  methods: {
    delTodo() {
      this.$emit("del", this.id);
    },
    change() {
      this.$emit("changeTodo", this.id);
    },
    handleDblclick(){
      this.$emit('changeEditId', this.id)
      // 让对应的 input 获得焦点
      // vue 内并没有提供获得焦点的做法，只能选择使用原生的做法
      // 获取 input 的真实 dom 在 vue 中不提倡使用 document
      // vue 中 推荐使用 ref 来获取 真实 dom
      // console.log(this.$refs.inp)
      // 我们直接获取的话是获取不到的，因为 双击之后 改变了 data  input 才出现，所以只有在生命周期 updated 之后才能获取更新后的 dom 
      // 如果想要在 数据更新之后就要获取 真实 dom 需要使用 vue 提供的 $nextTick 方法获取
      this.$nextTick(() => {
        // console.log(this.$refs)
        this.$refs.inp.focus()
      })
    },
    changeTodoText(e){
      // 先获取输入框的内容，其实内容并不是 todoText
      // 因为并没有使用 v-model 绑定 输入框(因为绑定就直接修改了 prop)
      // 所以获取输入框的内容需要使用原生 dom 也就是借助 event 
      const value = e.target.value
      // 判断修改了吗 或者输入是否为空
      if(value === this.todoText){
        // 没有做任何修改， 直接让输入框消失， 原来的文字展示
        this.$emit('changeEditId', '')
      }else if(value === ''){
        // 将内容全部删除了， 也就是删除了这个 todo
        this.$emit("del", this.id);
      }else{
        // 去做修改 todo 的操作
      }
    }
  }
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
.todo-item .todo-text:hover span {
  display: block;
}
.todo-item .todo-text span {
  display: none;
  color: chocolate;
  font-size: 20px;
  flex-shrink: 0;
}
.todo-item .todo-text p {
  cursor: default;
  flex-grow: 1;
}
.todo-item .todo-text p.completed {
  color: #ccc;
  text-decoration: line-through;
}
.todo-item .todo-text input {
  outline: 0;
  border: 0;
  font-size: 20px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px #ccc inset;
  flex-grow: 1;
  margin-left: 30px;
  text-indent: 10px;
}
</style>