<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <img src="./assets/1.jpg" alt="">
    <FirstComponent />
    <FirstComponent />
    <FirstComponent />
    <FirstComponent />
    <FirstComponent />
    <div class="box"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FirstComponent from './components/FirstComponent.vue'

export default {
  name: 'App',
  components:{
    HelloWorld,
    FirstComponent
  } 
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
.box  {
  width: 200px;
  height: 200px;
  background-image: url('./assets/1.jpg');
}
</style>

