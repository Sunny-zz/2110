<template>
  <div class="main">
    <HeaderNav />
    <router-view />
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

<style>

</style>