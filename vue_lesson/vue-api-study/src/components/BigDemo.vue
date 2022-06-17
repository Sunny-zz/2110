<template>
  <div>
    <h5>我是祖先组件</h5>
    <span>{{ count }}</span>
    <MidDemo a="a" b="b" c="c" />
  </div>
</template>

<script>
import MidDemo from "./MidDemo.vue";
// 利用 provide 在组件树上共享内容
// inject 去取
export default {
  components: { MidDemo },
  // 如果要将 组件的数据提供给后代 那么 provide 需要写成函数返回一个对象

  // 如果这个传递下去的数据希望是响应式的，需要将 数据写成函数 返回值形式。 后代组件接收的时候，调用才能得到对应的值
  provide() {
    return {
      count: () => this.count,
      add: this.add,
    };
  },
  data() {
    return {
      count: 100,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
</script>

<style>
</style>