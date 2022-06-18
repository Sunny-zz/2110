<template>
  <div>
    <p>父组件传递的{{msg}}</p>
    <button @click="$emit('fun')">执行父组件传递的自定义事件</button>
    <button @click="count ++ ">+</button>
    <span v-once>{{count}}</span>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  inheritAttrs: false,
  // 我们可以使用 $attrs 接收父组件传递的所有 props 但是不包含 组件通过 props 方式获取的
  // 或者说 $attrs 获取的是组件没有接收的所有 props
  created () {
    console.log(this.$attrs)
    console.log(this.$listeners)
  },
  data() {
    return {
      count: 100
    }
  },
}
</script>

<style>

</style>