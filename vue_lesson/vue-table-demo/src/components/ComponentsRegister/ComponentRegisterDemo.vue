<template>
  <div>
    <h3>组件注册(全局)</h3>
    <!-- 想要使用 BaseButton 组件但是不使用局部的组件注册 -->
    <BaseButton text="啊哈哈哈哈" />
    <BaseIcon />
  </div>
</template>

<script>
import BaseIcon from './BaseComponent/BaseIcon.vue'
export default {
  components: { BaseIcon },

}
</script>

<style>

</style>