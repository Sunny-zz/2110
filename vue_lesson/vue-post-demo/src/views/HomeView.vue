<template>
  <div class="home">
    <div class="nav"> 
      <router-link to="/all">全部</router-link>
      <router-link to="/good">精华</router-link>
      <router-link to="/share">分享</router-link>
      <router-link to="/ask">问答</router-link>
      <router-link to="/job">招聘</router-link>
      <router-link to="dev">客户端测试</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>