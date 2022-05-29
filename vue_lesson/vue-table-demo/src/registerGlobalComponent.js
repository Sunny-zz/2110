// 注册全局组件
// import BaseButton from './components/ComponentsRegister/BaseComponent/BaseButton.vue'

// import Vue from 'vue'

// 组件全局注册  Vue.component( 组件标签名, 组件(可以是函数组件)  )
// Vue.component('BaseButton', BaseButton)

// 自动化全局注册组件
// 前提是你的组件名要有一定的规范

import Vue from 'vue'
// 首字母大写
import upperFirst from 'lodash/upperFirst'
// 转驼峰   hello-world     helloWorld
import camelCase from 'lodash/camelCase'

// 利用 require.context   获取文件数组
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components/ComponentsRegister/BaseComponent',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  // console.log(fileName)
  // fileName 就是文件名
  // 获取组件配置
  // 利用 requireComponent 自动导入组件
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  // 得到组件注册的时候 需要传递的大驼峰写法标签名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})