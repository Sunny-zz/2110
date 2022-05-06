<template>
  <div class="demo1">
    <h2>组件的 data</h2>
    <!-- <button v-on:click='myClick' >按钮</button> -->
    <button @click="myClick">按钮</button>
    <!-- <div class="box" :style="`background-color: ${bgc}`"></div> -->
    <div class="box" :style="{backgroundColor: bgc}"></div>
    <h4>{{ title }}</h4>
    <button @click="changeShow">消失出现</button>
    <!-- <div :class="`box2${show ? '' : ' hide'}`"></div> -->
    <!-- <div :class="{box2: true, hide: !show}"></div> -->
    <!-- <div :class="['box2',  show ? '' : 'hide']"></div> -->
    <div :class="['box2', {hide: !show}]"></div>
    <button @click="change3">条件渲染按钮 v-show</button>
    <div v-show="show3" class="box3"></div>
    <button @click="change4">条件渲染按钮 v-if</button>
    <div v-if="show4" class="box4"></div>
    <hr>
    <div v-if="num === 100">啊哈哈哈</div>
    <div v-else-if="num === 50">啊哈哈哈1</div>
    <div v-else-if="num === 0">啊哈哈哈2</div>
    <div v-else>啊哈哈哈3</div>
  </div>
</template>

<script>
export default {
  // data(){
  //   return {
  //     // data 数据
  //     num: 100
  //   }
  // }
  data: () => ({
    // data 的初始值定义成什么
    bgc: "#ccc",
    title: "标题",
    show: true,
    show3: true,
    show4: true,
    num: 50
  }),
  methods: {
    myClick() {
      // console.log(this.bgc);
      // setTimeout(() => {
      //   console.log(this.title);
      // }, 1000);
      this.bgc = this.bgc === 'red' ? '#ccc' : 'red'
      this.title = 'xxxxx'
    },
    changeShow(){
      this.show = !this.show
    },
    change3(){
      this.show3 = !this.show3
    },
    change4(){
      this.show4 = !this.show4
    }
  },
};
</script> 

<style>
.box {
  width: 200px;
  height: 200px;
}
.box2{
  width: 200px;
  height: 200px;
  background-color: #00b3d4;
}
.hide {
  display: none;
}
.box3{
  width: 300px;
  height: 300px;
  background-color: #ccc;
}

.box4{
  width: 300px;
  height: 300px;
  background-color: teal;
}
</style>