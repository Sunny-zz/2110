<template>
  <button @click="handleClick">我就是一个按钮{{test}}</button>
</template>

<script>
export default {
  props: ['test'],
  data:() =>({
    value: '测试'
  }),
  // model 只是替换 v-model 传递的 prop 以及 自定义事件的名字，不能帮忙接收
  model: {
    prop: 'test',
    event: 'change'
  },
  methods: {
    handleClick() {
      console.log(22222)
      this.$emit('change', '子组件通过自定义事件调用修改的')
    }
  },
}
</script>

<style>

</style>