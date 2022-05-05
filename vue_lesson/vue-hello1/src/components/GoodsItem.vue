<template>
  <div class="goods-item">
    <h3>{{title}}<span>{{secondTitle}}</span></h3>
    <div class="show-pic">
      <img :src="picOne"   alt="">
      <img :src="picTwo" alt="">
    </div>
  </div>
</template>

<script> 
// 子组件接收父组件传递的 prop
// 在导出的对象下写个 props 属性，该属性值是数组, 数组中写属性名字符串，就可以接收父组件传递过来的对应的属性
// 这个写 prop 属性可以直接在 template 中使用，但是使用的时候需要了解 vue 的模版语法

export default {
  // props: ['title', 'secondTitle','picOne','picTwo']
  // props 接收的高级写法
  // 将 props 写成对象类型， 对象下的每一个属性就是接收的 prop , 主要为了 对 prop 进行校验
  // 可以参考官方文档 prop --->  prop 验证
  // 属性值有两种方式
  // 1. 直接写值的类型 例如 字符串类型  String  意思就是传递的数据必须是 字符串
  // props:{
  //   title: String,
  //   secondTitle: String,
  //   picOne: String,
  //   picTwo: String
  // }
  // 2. 直接写成对象 对象下可以添加 require  type   default 属性
  props:{
    title: {
      // 是否必须传递   默认是 false 
      // require: true,
      // 值的类型
      type: String,
      // 默认值 和 require 不一起使用
      default: '手机1',
      // 自定义校验函数
      // value 就是传递的值
      validator(value){
        // 需要return 布尔值
        return value.length > 2
      }
    },
    secondTitle: String,
    picOne: String,
    picTwo: String
  }
}
</script>

<style>
  .goods-item {
    width: 290px;
    height: 180px;
    margin-right: 10px;
    margin-left: 10px;
    padding: 16px 30px 0px;
    box-shadow: 1px 1px 3px #ccc;
    display: inline-block;
  }
  .goods-item h3 {
    margin: 0;
    margin-bottom: 20px;
  }
  .goods-item h3 span {
    font-size: 14px;
    color: #ccc;
  }
  .goods-item img:first-child{
    margin-right: 30px;
  }
  
</style>