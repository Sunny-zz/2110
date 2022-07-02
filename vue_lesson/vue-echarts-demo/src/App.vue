<template>
  <div>
    <h1>hello echarts</h1>
    <BarDemo />
    <hr>
    <PieDemo />
    <hr>
    <p>{{num}}</p>
    <button @click="num = {value : 100}">修改 num 第一次</button>
    <button @click="num.value = 200">修改 num 第二次</button>
  </div>
</template>

<script>
import BarDemo from './components/BarDemo.vue'
import PieDemo from './components/PieDemo.vue'
export default {
  components: { BarDemo, PieDemo },
  data() {
    return {
      num: 100
    }
  },
}
</script>

<style>

</style>