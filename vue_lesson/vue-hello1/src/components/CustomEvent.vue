<template>
  <div >
    <h3>自定义事件</h3>
    <!-- <MyButton text='登录' :onClick='login' />
    <MyButton text='注册' :onClick='signup' /> -->
    <!-- 父组件使用 v-on 指令向下传递自定义事件可以简写成 @ -->
    <MyButton @click.native='fun'  text="登录" v-on:on-click='login' />
    <MyButton @click.native='fun'  text="注册" @on-click='signup' />
  </div>
</template>

<script>
import MyButton from './MyButton.vue'
export default {
  components: { MyButton },
  methods: {
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

</style>