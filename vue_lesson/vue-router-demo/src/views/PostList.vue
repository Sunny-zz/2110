<template>
  <!-- 文章列表组件 -->
  <div v-if="list.length" class="post-list">
    <h4>文章列表</h4>
    <div v-for="post in list" :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  // 进入组件展示对应类别的数据列表，所以需要知道页面地址栏的动态参数
  created() {
    // vuerouter 中提供了  $route 用来获取当前路由的相关信息
    //  中的 params 就是动态路由参数
    // console.log(this.$route.params.type)
    // 因为是同一个组件 所以在切换的时候生命周期并不会执行。所以动态获取参数在生命周期不可行
    // 解决办法是 watch 监听 $route 或者 $route.params.type
  },
  watch: {
    // 监听的值不需要写 this
    "$route.params.type": {
      async handler(type) {
        // console.log(type)
        // 综合 recommended || undefined   ---  all
        // 前端 frontend  --- ask
        // 后端 backend   --- share
        let queryStr = ''
        // if(){

        // }else if(){}

        const res = await this.$http.get(queryStr)
        // console.log(res)
        this.list = res.data
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>