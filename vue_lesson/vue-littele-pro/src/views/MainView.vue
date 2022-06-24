<template>
  <div class="main">
    <HeaderNav />
    <router-view />
  </div>
</template>

<script>
import HeaderNav from '../components/HeaderNav.vue'
export default {
  components: { HeaderNav },
}
</script>

<style>

</style>