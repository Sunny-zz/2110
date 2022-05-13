<template>
  <div id="app">
    <!-- <ComputedDemo />
    <hr>
    <WatchDemo /> -->
    <CommentDemo />
  </div>
</template>

<script>
import CommentDemo from './components/CommentDemo/CommentDemo.vue'
// import ComputedDemo from './components/computedAndWatch/ComputedDemo.vue'
// import WatchDemo from './components/computedAndWatch/WatchDemo.vue'

export default {
  components: { CommentDemo },
  // components: { ComputedDemo, WatchDemo },
  name: 'App'
}
</script>

<style>
#app {
  margin-left: 60px;
}
</style>
