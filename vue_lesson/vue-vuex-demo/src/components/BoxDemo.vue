<template>
  <div>
    <button>store 数据 {{count}}</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count 
    }
  },
}
</script>

<style>

</style>