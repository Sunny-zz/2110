<template>
  <div>
    <h3>我是一个测试组件</h3>
    <button @click="count--">-</button>
    <button>{{ count }}</button>
    <button @click="addCount">+</button>
    <button @click="x = 10000">修改计算属性</button>
    <p>{{x}}</p>
    <hr>
    <button @click="addListItem">添加</button>
    <p>{{ num }}</p>
    <div>
      <div v-for="item in list" :key="item">{{ item }}</div>
    </div>
    <hr>
    <div>
      <p>年份: {{year}}</p>
      <p>姓名: {{name}}</p>
      <p @click="age ++">年龄: {{age}}</p>
      <p>{{obj}}</p>
    </div>
  </div>
</template>
<script>
import { ref , reactive, toRefs, computed, watch, watchEffect } from 'vue'
export default {
  // 当使用了 setup api 之后
  // 组件的 props 选项 一般当作 props 的校验 写成对象类型， 也可以直接写成数组
  // setup的 props 内可以接收到
  // setup 函数接收两个参数
  setup() {
    // 直接创建的变量是没有响应式的
    // 就是修改 count 不会引起视图的更新
    // 需要创建响应式的变量
    const count = ref(0)

    // onMounted(() => {
    //   count.value = 100
    // })

    const addCount = () => {
      // 响应式的变量修改的时候要修改  value
      count.value++
    }

    const x = computed({
      get: () => count.value * count.value,
      set: (value) => count.value = Math.sqrt(value)
    })

    watch(count, (newVal, oldVal) => {
      console.log(newVal)
      console.log(oldVal)
    },{immediate: true, deep: true} )

    watchEffect(()=> {
      console.log(111111111)
      console.log(count.value)
    })

    const list = reactive([1, 2, 3, 4])
    // console.log(list)
    // onMounted(() => {
    //   // 禁止对 响应式对象数据 进行赋值修改
    //   list.push(5)
    // })

    const addListItem = () => {
      // const { value } = list
      // 对象类型的数据可以解构赋值修改
      // value.push(value[value.length - 1] + 1)
      list.push(list[list.length - 1] + 1)
    }

    const num = computed(() => list.length)

    watch(num, (newVal, oldVal) => {
      console.log(newVal)
      console.log(oldVal)
    })

    const obj = reactive({
      year: 2022,
      name: '大白',
      age: 22
    })
    
    // setup 的返回值对象就相当于 data
    return {
      count,
      addCount,
      list,
      addListItem,
      num,
      ...toRefs(obj),
      obj,
      x
    }

  }
}
</script>

<style>
</style>

