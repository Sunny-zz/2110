<template>
  <div>
    <h3>计算属性 computed </h3>
    <input v-model="message" type="text">
    <!-- 在 vue 中 template 其实就相当于 html 中的 body，里面不能写太多的 js 逻辑操作 -->
    <!-- 我们可以将计算过程写在函数内将需要的结果 return 出去然后在 template 中获取这个返回值即可 -->
    <!-- vue 提供了计算属性， 来简化 template 中的 复杂的操作 跟上一条的方法一样 -->
    <!-- 方法和计算属性 选择计算属性， 因为计算属性是带缓存的。当该值被其他的值频繁使用的时候，这个值不会发生改变。 方法会反复执行方法的函数获取返回值，而计算属性就不会重新计算了，直接使用原来的值 -->
    <p>展示上面数入内容的颠倒字符串: {{reverseStr}}</p>
    <hr>
    <h3>计算属性的 getter 和 setter</h3>
    <div>
      <input v-model="firstName" type="text">
      <input v-model="lastName" type="text">
      <p>全名是: {{fullName}} </p>
      <button @click="changeName">修改全名为 赵 四</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    // 计算属性 使用的时候 直接使用方法名当作返回值使用
    reverseStr(){
      return this.message.split('').reverse().join('')
    },
    // fullName(){
    //   return this.firstName + ' ' + this.lastName
    // }
    // 带有 getter 和 setter 的计算属性写法
    fullName: {
      // get 方法用于提供计算属性的结果
      get(){
        return this.firstName + ' ' + this.lastName
      },
      // set 方法当计算属性被修改的时候会被触发，修改的值会被当做参数传入 。在这个方法内要根据新的 计算属性的值去修改计算属性的来源
      set(newFullName){
        // console.log(newFullName)
        this.firstName = newFullName.split(' ')[0]
        this.lastName = newFullName.split(' ')[1]
      }
    }
  },
  methods: {
    // reverseStr(){
    //   return this.message.split('').reverse().join('')
    // }
    changeName(){
      // 计算属性不能直接修改，想要修改的话需要给计算属性设置 setter
      this.fullName = '赵 四'
    }
  }
}
</script>

<style>

</style>