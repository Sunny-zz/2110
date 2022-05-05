<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <img src="./assets/11.jpg" alt="">
    <FirstComponent />
    <div class="box"></div>
    <hr>
    <GoodsItem title='生鲜馆' secondTitle='尝遍天下鲜' picOne='https://img13.360buyimg.com/img/s100x100_jfs/t1/177052/17/11003/120319/60d4099aEe6c40bef/0a1ea8aec41c528c.jpg!cc_100x100.webp' picTwo='https://img12.360buyimg.com/img/s100x100_jfs/t1/150926/15/4469/167602/5f977d54Ee011e70f/686c2f3b3a4d99d5.jpg!cc_100x100.webp' />
    <GoodsItem title='Joy' secondTitle='Joy' :picOne='picOne' :picTwo='picTwo' />
    <!-- html 中没有数字的概念，所以 template 中要使用数字的话需要使用模版语法 -->
    <GoodsItem :secondTitle='10' :picOne='picOne' :picTwo='picTwo' />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FirstComponent from './components/FirstComponent.vue'
import GoodsItem from './components/GoodsItem.vue'
import picOne from './assets/1.jpg'
import picTwo from './assets/2.jpg'

export default {
  name: 'App',
  components:{
    HelloWorld,
    FirstComponent,
    GoodsItem
  },
  data(){
    return {
      picOne: picOne,
      picTwo: picTwo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.box  {
  width: 200px;
  height: 200px;
  background-image: url('./assets/11.jpg');
}
</style>


