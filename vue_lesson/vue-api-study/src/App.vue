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
    <hr>
    <p>$attrs  $listeners</p>
    <!-- 父组件传递给子组件 props 和 自定义事件的时候 -->
    <AttrDemo msg='hello' :count="100" @fun="fun" @fn="fn" />
    <hr>
    <!-- 想要展示内容但是展示的内容和 vue 模板语法冲突的时候 可以使用哪个该指令 对内容不进行编译 -->
    <span v-pre>{{ this will not be compiled }}</span>
  </div>
</template>

<script>
import AttrDemo from './components/AttrDemo.vue'
import BigDemo from './components/BigDemo.vue'
export default {
  components: { BigDemo, AttrDemo },
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
  created () {
    // console.log(this.$parent);
    // console.log(this.$children);
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
    },
    fun(){
      console.log('自定义事件1')
    },
    fn(){
      console.log('自定义事件2')
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