<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import SetupDemo from './components/SetupDemo.vue';
import axios from 'axios'

// vue3.2  setup 新语法
// 1. 组件注册   直接导入 无需注册
// 2. 创建自定义指令 直接创建 vNameOfDirective 形式的对象就可以创建自定义指令

const test = () => {
  console.log('测试自定义事件')
}

let data = ref([])

const demo = ref(null)

onMounted(async () => {
  console.log(demo.value.a)
  const res = await axios.get('http://localhost:3008/list')
  data.value = res.data
})

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <hr>
  <SetupDemo ref="demo" @test="test" title="标题1122211" />
  <div v-for="item in data" :key="item.id">
    {{ item.text }}
  </div>
</template>

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
