<script setup>
const vFocusDirective = {
  mounted(el, binding) {
    // 聚焦元素
    if (binding.value === undefined || binding.value === true) {
      el.focus()
    }
  }
}
const props = defineProps({
  title: String
})

const emits = defineEmits(['test'])
// 组件想要使用 test 事件需要 emits('test')
const  a = 20
defineExpose({
  a
})
</script>


<template>
  <div>
    <h3>学习 setup --- {{title}}</h3>
    <button @click="emits('test')">测试事件</button>
    <input v-focus-directive="false" type="text">
  </div>
</template>

<style>
</style>