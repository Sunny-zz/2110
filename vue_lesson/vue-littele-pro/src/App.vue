<template>
  <div>
    <router-view />
  </div>
</template>

<script>

export default {
  created () {
    this.$store.dispatch('getUserInfo')
  },
}
</script>

<style>

</style>