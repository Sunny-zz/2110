<template>
  <div >
    <h3>自定义事件</h3>
    <!-- <MyButton text='登录' :onClick='login' />
    <MyButton text='注册' :onClick='signup' /> -->
    <!-- 父组件使用 v-on 指令向下传递自定义事件可以简写成 @ -->
    <!-- <MyButton @click.native='fun'  text="登录" v-on:on-click='login' />
    <MyButton @click.native='fun'  text="注册" @on-click='signup' /> -->
    <!-- 使用按钮子组件 跟按钮绑定事件修改 切换 下面盒子的出现和消失 -->
    <MyButton text='切换' @on-click="changeShow"  />
    <div v-show='show' class="test-box"></div>
  </div>
</template>

<script>
import MyButton from './MyButton.vue'
export default {
  data: ()=>({
    show: true 
  }),
  components: { MyButton },
  methods: {
    changeShow(){
      this.show = !this.show
    },
    fun(){
      console.log('1111')
    },
    login(a, b) {
      console.log('登录要做的事')
      console.log(a)
      console.log(b)
    },
    signup(a){
      console.log('注册要做的事')
      console.log(a)
    }
  },
}
</script>

<style>
.test-box{
  width: 400px;
  height: 400px;
  background-color: #ccc;
}
</style>