<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">about</router-link>
    <hr>
    <p>{{ number }}</p>
    <button @click="changeNumber(10000)">修改</button>
  </div>
  <router-view></router-view>
</template>

<script setup >
import { computed } from 'vue';
import { useStore } from 'vuex'
const {state, dispatch} = useStore()
const number = computed(() => state.number)
const changeNumber = (num) => {
  dispatch('changeNumber', num)
}
</script>