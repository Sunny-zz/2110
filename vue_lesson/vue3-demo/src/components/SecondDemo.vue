<template>
  <div>{{msg}}</div>
  <button ref="btn" @click="changeMsg('子组件修改了')">子组件修改 msg</button>
</template>
<script>
import { inject , onMounted, ref } from 'vue'


  export default {
    setup(){
      const msg = inject('msg', '默认值')
      const changeMsg = inject('changeMsg', '默认值')

      // 获取真实 dom  button
      const btn = ref(null)
      onMounted(()=> {
        console.log(btn.value)
      })
      return {
        msg,
        changeMsg,
        btn
      }
    }
  }
</script>
<style>
</style>