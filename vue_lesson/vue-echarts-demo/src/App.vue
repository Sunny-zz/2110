<template>
  <div>
    <h1>hello echarts</h1>
    <BarDemo />
    <hr>
    <PieDemo />
  </div>
</template>

<script>
import BarDemo from './components/BarDemo.vue'
import PieDemo from './components/PieDemo.vue'
export default {
  components: { BarDemo, PieDemo },

}
</script>

<style>

</style>