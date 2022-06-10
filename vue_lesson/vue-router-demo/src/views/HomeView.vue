<template>
  <div>
    <h3>我是首页</h3>
    <div class="nav">
      <!-- 不管 link 切换到哪种页面， to 的地址都需要写全 -->

      <!-- 页面地址是  /  或者  /recomended 的时候都会变色 -->
      <!-- 当 router-link 的激活变色 默认的 active-class 以及 exact-active-class 不满足的话， 可以动态直接控制 class 属性, 属于额外的控制，之前的 active-class 以及 exact-active-class 可以直接用  -->
      <router-link
        :class="$route.path === '/' ? 'active' : ''"
        active-class="active"
        to="/recommended"
        >综合</router-link
      >
      <router-link exact-active-class="active" to="/frontend">前端</router-link>
      <router-link exact-active-class="active" to="/backend">后端</router-link>
    </div>
    <!-- 首页里面有很多二级页面 比如 综合 前端 后端 -->
    <!-- 地址是    -->
    <!-- localhost:8080   localhost:8080/recommended   综合 -->
    <!-- localhost:8080/frontend   前端 -->
    <!-- localhost:8080/backend   后端 -->
    <!-- 而且这三个页面非常相似 几乎一样 就是数据不一样-->
    <!-- 所以 三个页面写成一个组件 -->
    <!-- 但是 要多个地址匹配一个页面，所以需要使用 动态路由来实现  动态路由就是地址上存在变量 -->

    <!-- home 除了展示标题以外，还要展示子页面，所以需要 router-view -->
    <!-- 写在了 home 内的 router-view 只有当 home 被匹配的时候才会出现 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>