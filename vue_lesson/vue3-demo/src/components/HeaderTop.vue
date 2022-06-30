<template>
  <header>
    <button class="btn" @click="showMask = true">弹出弹窗</button>
    <button @click="$emit('handleClick')">接收自定义事件</button>
    <teleport to="body">
      <div @click.self="showMask = false" v-show="showMask" class="mask">
        <div class="box"></div>
      </div>
    </teleport>
  </header>
</template>
<script>
// import { ref } from 'vue'
// export default {
//   emits: ['handleClick'],
//   setup() {
//     const showMask = ref(false)


//     // const mask = ref(null)
//     // onMounted(() => {
//     //   document.querySelector('body').append(mask.value)
//     // })

//     return {
//       showMask,
//       // mask
//     }
//   }
// }
</script>
<script setup>
import { ref } from 'vue';
const showMask = ref(false)
</script>
<style scoped>
header {
  height: 50px;
  background-color: #ccc;
  width: 100%;
}

.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  width: 400px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
}
</style>