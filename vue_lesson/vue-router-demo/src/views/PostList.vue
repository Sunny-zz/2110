<template>
  <!-- 文章列表组件 -->
  <div class="post-list">
    <h4>文章列表</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  // 进入组件展示对应类别的数据列表，所以需要知道页面地址栏的动态参数
  created () {
    // vuerouter 中提供了  $route 用来获取当前路由的相关信息
    //  中的 params 就是动态路由参数
    console.log(this.$route.params.type)
    // 因为是同一个组件 所以在切换的时候生命周期并不会执行。所以动态获取参数在生命周期不可行
    // 解决办法是 watch 监听 $route 或者 $route.params.type
  },
  watch: {
    '$route.params.type'(newValue) {
      console.log(newValue)
      // 根据不同的 value 发送请求更新 data 页面数据就会发生改变了
    }
  }
}
</script>

<style>

</style>