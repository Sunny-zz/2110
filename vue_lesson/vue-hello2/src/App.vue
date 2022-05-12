<template>
  <div id="app">
    <ComputedDemo />
  </div>
</template>

<script>
import ComputedDemo from './components/computedAndWatch/ComputedDemo.vue'

export default {
  components: { ComputedDemo },
  name: 'App'
}
</script>

<style>
#app {
  margin-left: 60px;
}
</style>
