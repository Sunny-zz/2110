<template>
  <div>
    <h5>我是父组件</h5>
    <span>{{b}} {{$attrs.c}}</span>
    <SmallDemo />
  </div>
</template>

<script>
import SmallDemo from './SmallDemo.vue'

export default {
  props: ['b'],
  // 当 父组件传递了很多的属性给子组件，但是子组件并没有全部接收，那么这些属性会自动添加到组件的跟元素上
  // 使用 inheritAttrs: false 可以阻止这种默认的情况 ，不添加到根元素
  // 依然可以使用 $attrs 获取和展示未接收的 属性
  inheritAttrs: false,
  components: { SmallDemo },
  created () {
    // console.log(this.$attrs)
  },
}
</script>

<style>

</style>