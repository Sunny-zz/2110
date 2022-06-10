<template>
  <div class="router-demo">
    <div>
      <!-- 要实现路由跳转 需要使用路由的内置组件 -->
      <!-- router-link 的 to 是去 路由数组中匹配 path   或者说 to 是相当于改变了页面地址 -->
      <!-- router-link 是一个组件，其实默认就是一个 a 标签， to 就相当于 href -->
      <router-link exact-active-class="active" :class="{active: ['/recommended', '/frontend', '/backend'].includes($route.path)}" to='/'>Home</router-link>
      <span>|</span>
      <router-link exact-active-class="active" to='/about'>About</router-link>
    </div>
    <!-- 当地址和路由对应path 匹配的时候 就会将对应的组件展示到  router-view-->
    <!-- 其实 router-view 就是一个判断组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .router-demo .active{
    color: red;
  }
</style>