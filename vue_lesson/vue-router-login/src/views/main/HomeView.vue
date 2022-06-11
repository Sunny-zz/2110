<template>
  <div>
    <div class="nav">
      <router-link to='/recommended'>推荐</router-link>
      <router-link to='/frontend'>前端</router-link>
      <router-link to='/backend'>后端</router-link>
    </div>
    <!-- 展示列表 -->
    <!-- 为什么做成路由，因为地址切换了 列表类别才会切换 -->
    <!-- 其实如果地址只是查询部分发生了改变的话， 可以考虑不做成路由 -->
    <router-view />
  </div>
</template>

<script>

export default {
  // 组件内的守卫
  // 只有组件是页面组件的时候才有用
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next()
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  },
  beforeRouteLeave(to, form, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
  }
}
</script>

<style>

</style>