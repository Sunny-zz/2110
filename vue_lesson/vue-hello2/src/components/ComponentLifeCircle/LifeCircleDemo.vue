<template>
  <div>
    <h3 class="title">vue 组件的生命周期</h3>
    <button @click="num--">-</button>
    <button class="num">{{ num }}</button>
    <button @click="add">+</button>
    <hr>
    <button @click="show=!show">修改 show</button>
    <LifeCircleChildren v-if="show" :num.sync='num' />
  </div>
</template>

<script>
import LifeCircleChildren from './LifeCircleChildren.vue';
export default {
  components: { LifeCircleChildren },
  data() {
    return {
      num: 100,
      show: true
    };
  },
  // 生命周期钩子函数直接写在 导出的对象内
  beforeCreate() {
    console.log("我是父组件 ----- beforeCreate");
  },
  created() {
    console.log("我是父组件 ----- created");
    // 组件出现就修改 data，包括请求修改
    // 但是异步修改的话 其实会在 mounted 之后去修改因为生命周期都是同步的，那么在 mounted 异步修改 data 也行
  },
  beforeMount() {
    console.log("我是父组件 ----- beforeMount");
  },
  mounted() {
    console.log("我是父组件 ----- mounted");
    // console.log(document.querySelector('.title'))
  },
  beforeUpdate() {
    console.log("我是父组件 ----- beforeUpdate");
  },
  updated() {
    console.log("我是父组件 ----- updated");
  },
  beforeDestroy () {
    console.log("我是父组件 ----- beforeDestroy");
  },
  destroyed () {
    console.log("我是父组件 ----- destroyed");
  },
  methods: {
    add() {
      setTimeout(() => {
        this.num++;
      }, 1000);
    },
  },
};
</script>

<style>
</style>