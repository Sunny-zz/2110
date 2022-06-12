<template>
  <div>
    <h4>列表页</h4>
    <span>{{a}}</span>
  </div>
</template>

<script>
export default {
  props: ["type", 'a'],
  watch: {
    type: {
      handler(newValue) {
        console.log(newValue? newValue : 'recommended')
        // 路由记录 
        // 当如何页面组件被展示的时候，都会有一个路由记录， 路由记录可以使用 $route.matched 获取
        // 路由记录指的是 当前地址展示的 所有组件
        // 当我们给路由设置了 meta 字段的时候, 可以通过路由记录获取对应的 meta 字段
        // 一般设置 meta 字段就是设置当前页面的权限
        // 在全局前置守卫获取 meta 字段判断用户是否有权限， 是否可以进入对应页面
        // console.log(this.$route)
        // this.$route.matched.forEach(item => {
        //   console.log(item.meta)
        // });
      },
      immediate: true
    },
  },

};
</script>

<style>
</style>