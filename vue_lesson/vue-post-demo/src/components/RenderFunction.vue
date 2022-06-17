<template>
  <div>
    <!-- 用户体验 -->
    <RenderDemo tag="h3" >标题</RenderDemo>
    <render-demo-one tag="h4" x='hello'>标题</render-demo-one>
  </div>
</template>

<script>
import RenderDemo from "./RenderDemo.vue";
export default {
  components: { RenderDemo },
};
</script>

<style>
</style>