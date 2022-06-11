<template>
  <div class="main">
    <div class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/new">关于</router-link>
      <p>{{ getUser.username }}</p>
      <img width="50" height="50" :src="getUser.avatar_url" alt="">
      <button @click="logout">退出登录</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    getUser() {
      return JSON.parse(sessionStorage.getItem("user"));
    },
  },
  methods: {
    logout() {
      // 做什么
      sessionStorage.removeItem('user')
      // sessionStorage.clear()  清空所有 sessionsessionStorage
      this.$router.push('/login')
    }
  },
};
</script>

<style>
.main > .nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>