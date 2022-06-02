<template>
  <div>
    <h3>我是首页</h3>
    <div class="nav">
      <!-- 不管 link 切换到哪种页面， to 的地址都需要写全 -->
      <router-link to='/recommended'>综合</router-link>
      <router-link to='/frontend'>前端</router-link>
      <router-link to='/backend'>后端</router-link>
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
export default {

}
</script>

<style>

</style>