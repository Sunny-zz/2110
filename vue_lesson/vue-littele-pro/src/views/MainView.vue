<template>
  <div class="main">
    <HeaderNav />
    <div class="content">
      <router-view />
    </div>
    <FooterInfo /> 
  </div>
</template>

<script>
import FooterInfo from '../components/FooterInfo.vue'
import HeaderNav from '../components/HeaderNav.vue'
export default {
  components: { HeaderNav, FooterInfo },
}
</script>
<style lang="less" scoped>
.main{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .header-nav, footer{
    flex-shrink: 0;
  }
  .content{
    flex-grow: 1;
  }
}
</style>