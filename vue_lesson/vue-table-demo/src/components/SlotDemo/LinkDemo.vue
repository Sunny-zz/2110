<template>
  <a :href="href">
    <!-- 子组件的 slot 标签之间 写的内容是默认的插槽内容，父组件不传递插槽展示默认内容，传递了就展示传递的 -->
    <!-- 也叫后备内容 -->
    <slot>
      <span>默认文字</span>
    </slot>
  </a>
</template>

<script>
export default {
  props: ["href"],
  // data() {
  //   return {
  //     num: 100
  //   }
  // },
};
</script>

<style>
</style>