<template>
  <div>
    <h2>vue api</h2>
    <h4>全局 api</h4>
    <!-- Vue.nextTick  相当于   this.$nextTick -->
    <hr>
    <p>nextTick</p>
    <button @click="changeShow">出现</button>
    <input v-show="show" ref="inp" type="text">
    <!-- <div v-if="show" ref="box" class="box"></div> -->
    <hr>
    <p>set  delete</p>
    <button @click="addAge">添加年龄</button>
    <button @click="delAddress">删除地址</button>
    <button @click="changeNum">修改数组</button>
    <p>{{user.name}}</p>
    <p>{{user.address}}</p>
    <p v-if="user.age">{{user.age}}</p>
    <ul>
      <li v-for="(i, index) in numArr" :key="index">{{i}}</li>
    </ul>
    <hr>
    <p>provide/inject</p>
    <BigDemo />
  </div>
</template>

<script>
import BigDemo from './components/BigDemo.vue'
export default {
  components: { BigDemo },
  data() {
    return {
      show: false,
      user: {
        name: '小赵',
        address: '秦皇岛'
      },
      numArr: [1,2,3]
    }
  },
  methods: {
    changeShow() {
      this.show = true
      this.$nextTick(() => {
        this.$refs.inp.focus()
      })
      // setTimeout(() => {
      //   console.log(this.$refs.box)
      // }, 0);
    },
    addAge(){
      // 这种给对象新增属性  vue 检测不到，无法做响应
      // 此时就需要 1. this.$set 更新对象   2. 赋值方式更新对象
      // this.user = {...this.user, age: 25}
      // console.log(this.user)
      this.$set(this.user, 'age', 25)
    },
    delAddress(){
      // 这种删除对象属性  vue 检测不到，无法做响应
      // 此时就需要 1. this.$delete 更新对象   2. 赋值方式更新对象
      // const copy = {...this.user}
      // delete copy.address
      // this.user = copy
      this.$delete(this.user, 'address')
    },
    changeNum(){
      this.numArr[1] = 4
      // console.log(this.numArr)
      this.$set(this.numArr, 1, 4)
    }
  },
}
</script>

<style>
.box{
  width: 300px;
  height: 300px;
  background-color: #ccc;
}
</style>