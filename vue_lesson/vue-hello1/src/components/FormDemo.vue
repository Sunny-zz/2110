<template>
  <div>
    <h3>表单的输入绑定</h3>
    <!-- <input type="text">
    <input type="checkbox" name="" id="">
    <input type="checkbox" name="" id="">
    <input type="checkbox" name="" id="">
    <input type="checkbox" name="" id="">
    <select name="" id="">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <div>
      男<input type="radio" name="sex">
      女<input type="radio" name="sex">
    </div> -->
    <!-- <input type="text" @input="handleUsername" :value="username"> -->

    <!-- 使用 v-model 简写了  value 以及 @input -->
    <input type="text" v-model="username" />
    <textarea cols="30" rows="10" v-model="comment" ></textarea>
    
    <hr>
    <div>
      <h3>你知道的 js 框架有哪些？</h3>
      <!-- 多个复选框使用的时候需要 添加 value 属性， value 的属性值 跟 组件 data 是 对应的 -->
      <label for="vue">vue</label>
      <input v-model="arr" value="vue" type="checkbox" id="vue">
      <label for="react">react</label>
      <input v-model="arr" value="react" type="checkbox" id="react">
      <label for="angular">angular</label>
      <input v-model="arr" value="angular" type="checkbox" id="angular">
    </div>
    <input v-model="isAgree" type="checkbox" id="agree">
    <label for="agree">是否同意</label>
    <hr>
    <h3>你的性别？</h3>
    <label for="nan">男</label>
    <input v-model="sex" type="radio" value="男" id="nan" >
    <label for="nv">女</label>
    <input v-model="sex" type="radio" value="女" id="nv" >
    <hr>
    <select v-model="selected" >
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
    </select>
    <hr>
    <input v-model.number="number" type="text">
    <input v-model.trim="text" type="text">
    <input v-model="text1" type="text">
    <br>
    <br>
    <VModelDemo v-model="test"  />
    <br>
    <br>
    <button @click="handleClick">展示 </button>
  </div>
</template>
<script>
import VModelDemo from './VModelDemo.vue';
// v-model 指令修饰符  .lazy    .number（使用的 parseFloat 将值转化成数字）    .trim    主要针对  input  textarea 文本输入类的
// 组件上的 v-model
// 就是相当于给子组件传递了 props value 以及一个自定义事件 @input（有可能是 change 试试就行了）  这个事件的作用是用来修改 传过去的值，
// 如果 v-model 传递的 value 以及 input|change 在子组件中有冲突的话, 可以在子组件中使用  model 属性修改 prop 名字和自定义事件的名字
export default {
  components: { VModelDemo },
  data() {
    return {
      username: "213123",
      comment: '',
      arr: ['vue', 'react'],
      isAgree: true,
      sex: '女',
      selected: 'C',
      number: 100,
      text: 'hello world',
      text1: 'hello world1',
      test: '哈哈哈哈'
    };
  },
  methods: {
    // handleUsername(event){
    //   // 根据用户的输入 修改 username
    //   const value = event.target.value
    //   this.username = value
    //   console.log(this.username)
    // }
    handleClick() {
      console.log(this.username);
      console.log(this.comment);
      console.log(this.arr);
      console.log(this.sex);
      console.log(this.selected);
      console.log(this.number);
      console.log(this.text);
    },
  },
};
</script>

<style>
</style>