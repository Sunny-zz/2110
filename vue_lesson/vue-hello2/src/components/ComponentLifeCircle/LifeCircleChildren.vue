<template>
  <div>
    <h4>我是子组件</h4>
    <span>父组件的num: {{num}}</span>
    <button @click="$emit('update:num', 1000)">修改父组件的  num </button>
  </div>
</template>

<script>
export default {
  props:['num'],
  // 组件接收的 props 变化的时候可能(当 props 跟 template 有关联的时候)会触发更新阶段生命周期 
  
  beforeCreate() {
    console.log("我是子组件 ------ beforeCreate");
  },
  created() {
    console.log("我是子组件 ------ created");
  },
  beforeMount() {
    console.log("我是子组件 ------ beforeMount");
  },
  mounted() {
    console.log("我是子组件 ------ mounted");
  },
  beforeUpdate() {
    console.log("我是子组件 ------ beforeUpdate");
  },
  updated() {
    console.log("我是子组件 ------ updated");
  },
  beforeDestroy () {
    console.log("我是子组件 ------ beforeDestroy");
  },
  destroyed () {
    console.log("我是子组件 ------ destroyed");
  },
}
</script>

<style>

</style>