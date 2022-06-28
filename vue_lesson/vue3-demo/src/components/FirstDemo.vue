<template>
  <div>
    <h3>我是一个测试组件 ----- {{ title }}</h3>
    <button>+</button>
    <button>{{}}</button>
    <button>-</button>
  </div>
</template>
<script>
export default {
  props: ['title'],
}
</script>
<style>
</style>

