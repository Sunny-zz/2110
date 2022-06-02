<template>
  <div>
    <h3 ref='title'>处理边界情况</h3>
    <!-- 1. 访问元素和组件   获取了组件就相当于获取了组件的 this -->
    <!-- ref 访问元素和组件  -->
    <!-- $root 访问根组件 -->
    <!-- $parent 访问父组件 -->
    <!-- $children 访问子组件 -->
    <!-- 2. 程序化的事件侦听器 -->
    <!-- $on  添加自定义事件 使用 $emit 接收 -->
    <!-- $once 添加自定义事件 使用 $emit 接收  -->
    <!-- $off 解除自定义事件 -->
    <!-- 3. 循环引用 (组件递归) -->
    <!-- 4. 控制更新 -->
    <BaseButton ref="btn"  text='hello' />
    <!-- <button @click="handleClick">按钮</button> -->
    <MenuDemo :menuList='menuList' />
    <div>
      {{JSON.stringify(obj)}}
    </div>
    <button @click="update">强制更新</button>
  </div>
</template>

<script>
import MenuDemo from './MenuDemo.vue'
export default {
  components: { MenuDemo },
  data() {
    return {
      menuList: [
        {
          id: 1,
          name: '一级1',
          children: [
            {
              id: 3,
              name: '一级1-1',
              children: [
                {
                  id:5,
                  name: '一级1-1-1'
                }
              ]
            },
            {
              id: 4,
              name: '一级1-2',
            }
          ]
        },
        {
          id: 2,
          name: '一级2'
        }
      ],
      obj: {a: 10},
      goods: [
      ]
    }
  },
  mounted () {
    // console.log(this.$refs.title);
    // console.log(this.$refs.btn);
    // this.$refs.btn.changeNum(2000)
    // console.log(this.$root)
    // console.log(this.$parent)
    // console.log(this.$children[0])
    // this.$on('testFun', (msg) => {
    //   console.log(msg)
    // })
  },
  methods: {
    // handleClick() {
    //   this.$emit('testFun', 'hello')
    //   this.$off('testFun')
    //   console.log(this)
    // }
    update(){
      this.obj.c = 100
      this.$forceUpdate()
    }
  },
}
</script>

<style>

</style>