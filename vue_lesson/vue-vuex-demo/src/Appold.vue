<template>
  <div>
    <h2>hello vuex</h2>
    <button>{{count}}</button>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="change">修改</button>
    <BoxDemo />
  </div>
</template>

<script>
import BoxDemo from './components/BoxDemo.vue'

export default {
  components: { BoxDemo },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    add() {
      this.$store.commit('addCount')
    },
    sub() {
      this.$store.commit('subCount')
    },
    change(){
      // this.$store.commit('changeCount',100)

      // commit 传递对象形式  那么 mutation 的 第二个参数接收整个对象
      // commit 对象内的 type 就是 mutation 函数的名字
      this.$store.commit({
        type: 'changeCount',
        num1: 100,
        num2: 200
      })
    }
  },
}
</script>

<style>

</style>