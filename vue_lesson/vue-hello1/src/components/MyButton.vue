<template>
  <!-- 接收父组件传递的自定义事件 -->
  <!-- 1. template 中  $emit('事件名', 参数)  接收并调用 -->
  <!-- 2. script 中 this.$emit('事件名', 参数) 接收并调用 -->
  <!-- <button @click="$emit('onClick')" class="btn">{{text}}</button> -->

  <!-- 父组件想要给 btn-wrap 就是子组件的根元素 绑定一个点击事件， 我们可以直接接收父组件的自定义事件然后使用 btn-wrap 的 @click 绑定上 -->
  <!-- vue 中的自定义事件提供了一个 native 修饰符，可以帮助我们快速绑定原生事件,要注意自定义事件名要和原生的事件名一致 -->
  <div  class="btn-wrap">
    <button @click="handleClick" class="btn">{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "默认按钮",
    },
    // onClick: {
    //   type: Function
    // }
  },
  methods: {
    handleClick() {
      // console.log('按钮自己事件')
      // 接收父组件的自定义事件并调用
      this.$emit("on-click", 100, 200);
    },
  },
};
</script>

<style>
.btn-wrap {
   padding: 20px;
   display: inline-block;
   border: 1px solid #ccc;
   margin-right: 10px;
}
.btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
</style>