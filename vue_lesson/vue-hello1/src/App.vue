<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <img src="./assets/11.jpg" alt="">
    <FirstComponent />
    <div class="box1"></div>
    <hr>
    <GoodsItem title='生鲜馆' secondTitle='尝遍天下鲜' picOne='https://img13.360buyimg.com/img/s100x100_jfs/t1/177052/17/11003/120319/60d4099aEe6c40bef/0a1ea8aec41c528c.jpg!cc_100x100.webp' picTwo='https://img12.360buyimg.com/img/s100x100_jfs/t1/150926/15/4469/167602/5f977d54Ee011e70f/686c2f3b3a4d99d5.jpg!cc_100x100.webp' />
    <GoodsItem title='Joy' second-title='Joy' :pic-one='picOne' :pic-two='picTwo' />
    <!-- html 中没有数字的概念，所以 template 中要使用数字的话需要使用模版语法 :x='100' -->
    <!-- 传递布尔值的时候也是需要使用模板语法 v-bind 但是有省略的写法 比传递一个 show 是 true  默认  :show='true' 简化成 show  -->
    <GoodsItem second-title='哈哈哈哈' :pic-one='picOne' :pic-two='picTwo'    />
    <hr>
    <DataDemo class="data-demo" />
    <hr>
    <BannerDemo />
    <hr>
    <EventDemo />
    <hr>
    <conditional-demo v-show="false" />
    <hr>
    <list-demo />
    <hr>
    <FormDemo />
    <hr>
    <CustomEvent />
    <hr>
    <SyncDemo />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FirstComponent from './components/FirstComponent.vue'
import GoodsItem from './components/GoodsItem.vue'
import picOne from './assets/1.jpg'
import picTwo from './assets/2.jpg'
import DataDemo from './components/DataDemo.vue'
import BannerDemo from './components/BannerDemo.vue'
import EventDemo from './components/EventDemo.vue'
import ConditionalDemo from './components/conditional-demo.vue'
import ListDemo from './components/list-demo.vue'
import FormDemo from './components/FormDemo.vue'
import CustomEvent from './components/CustomEvent.vue'
import SyncDemo from './components/SyncDemo.vue'

export default {
  name: 'App',
  components:{
    HelloWorld,
    FirstComponent,
    GoodsItem,
    DataDemo,
    BannerDemo,
    EventDemo,
    ConditionalDemo,
    ListDemo,
    FormDemo,
    CustomEvent,
    SyncDemo
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
#app > .box1  {
  width: 200px;
  height: 200px;
  background-image: url('./assets/11.jpg');
}
</style>


