<template>
  <div id="app">
    <!-- <ComputedDemo />
    <hr>
    <WatchDemo /> -->
    <CommentDemo />
    <hr />
    <!-- <button @click="show = !show">修改 show</button>
    <LifeCircleDemo v-if="show" /> -->
  </div>
</template>

<script>
import CommentDemo from "./components/CommentDemo/CommentDemo.vue";
// import LifeCircleDemo from './components/ComponentLifeCircle/LifeCircleDemo.vue'
// import ComputedDemo from './components/computedAndWatch/ComputedDemo.vue'
// import WatchDemo from './components/computedAndWatch/WatchDemo.vue'

export default {
  components: {
    CommentDemo,
    // LifeCircleDemo
  },
  name: "App",
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
#app {
  margin-left: 60px;
}
</style>



