<template>
  <div>
    <h5>我是子组件</h5>
    <span>祖先组件的数据{{count()}}</span>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  inject: ['count', 'add']
}
</script>

<style>

</style>