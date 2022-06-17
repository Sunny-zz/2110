<template>
  <div>
    <!-- vue 插件功能 -->
    <!-- 插件功能就是给 vue 添加全局功能 -->
    <!-- 比如 全局注册组件  全局过滤器  全局指令 ...    -->
    <!-- 1. 添加全局方法或者 property    就是 给 Vue 添加属性或者方法  比如 Vue.a = 100    用的比较少 -->
    <!-- 2. 添加全局资源：指令/过滤器/过渡等 -->
    <!-- 3. 通过全局混入来添加一些组件选项 -->
    <!-- 4. 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。 比如 封装 axios 到 Vue.prototype.$http 上 -->
    <p>{{100 | timeFormat}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  created () {
    console.log(Vue.a)
  },
}


</script>

<style>

</style>