<template>
  <div>
    hello
    <button @click="fun">跨域测试</button>
  </div>
</template>

<script>
import axios from 'axios'

// 跨域代理   
// 前端服务器进行代理
// vue 本地项目 服务器是 webpack 的 devServer 制作的，所以设置代理的话需要 修改 devServer 配置
// vuecli搭建的项目可以使用 vue.config.js 修改 devServer 配置

export default {
  methods: {
    async fun() {
      const res = await axios.get('api/topics')
      console.log(res)
    }
  },
}
</script>

<style>

</style>