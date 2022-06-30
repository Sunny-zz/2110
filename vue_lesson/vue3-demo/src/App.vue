<template>
  <HeaderTop @handleClick="test" />
  <FirstDemo />
  <hr>
  <button @click="msg = '修改的 msg'">修改 msg</button>
  <SecondDemo />
  <el-button>Default</el-button>
</template>

<script>
import { provide, ref } from 'vue'
import FirstDemo from './components/FirstDemo'
import SecondDemo from './components/SecondDemo'
import HeaderTop from './components/HeaderTop'
export default {
  name: 'App',
  components: {
    FirstDemo,
    SecondDemo,
    HeaderTop
  },
  created () {
    console.log(this.$axios);
  },
  setup() {
    const msg = ref('hello vue3')
    const changeMsg = (newMsg) => {
      msg.value = newMsg
    }
    provide('msg', msg)
    provide('changeMsg', changeMsg)

    const test = () => {
      console.log('测试自定义事件')
    }
    return {
      msg,
      test
    }
  }

}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:deep(.btn){
  color: red;
}

:global(button) {
  width: 100px;
}
</style>
