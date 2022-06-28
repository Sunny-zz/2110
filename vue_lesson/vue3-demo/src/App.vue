<template>
  <FirstDemo :title="title" />
  <button @click="title ='修改了title'">修改</button>
</template>

<script>
import FirstDemo from './components/FirstDemo'
export default {
  name: 'App',
  components: {
    FirstDemo
  },
  data() {
    return {
      title: '测试'
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
