<template>
  <div>
    <h4> sync 修饰符</h4>
    <button>{{num}}</button>
    <!-- <SyncDemoChild text="修改" @change='change' /> -->
    <!-- 当我们传递 prop 的时候可以使用 sync 修饰符修饰，修饰的结果相当于 将  num 当作prop 传递下去 并且提供了一个 赋值修改 num 的方法  当作自定义事件 update:num 传递给了子组件 -->
    <!-- 赋值修改？  this.xx = newXX  传递新的值替换原来的 -->
    <SyncDemoChild text="修改" :num.sync='num' />
  </div>
</template>

<script>
import SyncDemoChild from './SyncDemoChild.vue'
export default {
  components: { SyncDemoChild },
  data() {
    return {
      num: 100
    }
  },
  methods: {
    // change(newNum) {
    //   this.num = newNum
    // }
  },
}
</script>

<style>

</style>