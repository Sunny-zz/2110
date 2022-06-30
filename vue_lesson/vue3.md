## vue3 
目前最新版本 3.2.36


## vue3 新特性

- setup     composition api
- ref   制作响应式数据(基础类型数据)
- reactive  制作响应式数据(引用类型数据)
- isRef 
- toRefs  搭配 reactive 将对象内的属性直接做成响应式并且和对象是关联的
- readonly 
- computed 计算属性(get  setup)
- watch watchEffect    watch 可以传递 flush(watch 函数执行的时机) 配置
- lifeCircle  onMounted  
- template refs
- suspense
- provide/inject
- globalProperties

## 区别
- 虚拟 dom 一系列 重写了
- ts 支持
- vue2 大量 api 挂载到了 Vue 上
- jsx
- setup 语法  composition api


### setup 语法

setup 函数的返回值里面就存在  data 还有 method 

setup 函数内制作 data 的时候需要制作成响应式数据
使用 ref reactive 来制作
1. ref 可以将所有数据制作成响应式的 但是 对象数据的话是 value 属性
2. reactive 只会将对象类型制作成响应式的 
