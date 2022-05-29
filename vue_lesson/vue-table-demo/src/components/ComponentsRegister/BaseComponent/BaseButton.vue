<template>
  <!-- 这个按钮组件是项目中的基础组件，也就是在任何其他组件内都可能会用到这个按钮组件，所以需要将组件注册成全局组件 -->
  <button>{{ text }}</button>
</template>

<script>
export default {
  props: ["text"],
  // data() {
  //   return {
  //     num: 1000
  //   }
  // },
  // methods: {
  //   changeNum(num) {
  //     this.num = num
  //   }
  // },
};
</script>

<style>
</style>