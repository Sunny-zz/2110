import Vue from 'vue'
import '../assets/xxx.css'
// 利用渲染函数处理组件
// 1. 使用 Vue.component 制作全局组件 里面用渲染函数处理
const a = 10
const b = 20
const arr = [1,2,3]
Vue.component('render-demo-one', {
  // 当 functional为 true 的话 组件就是函数式组件了，里面没有 this 所有内容多通过 render 的第二个参数获取
  functional: true,
  render(h,context) {
    // render 函数内可以直接写 jsx 语法
    return <context.props.tag class='ceshi'>
      {context.slots.default}
      { b > a ? 1000 : ''}
      {arr.map(item => <span>{item}</span> )}
      {context.props.x}
    </context.props.tag>

    // 禁止写 jsx 的话就需要使用 h(createElement) 来创建节点(vnode)

    // return h(this.tag, {
    //   on: {
    //     click: ()=> {console.log(this.tag)}
    //   }
    // }, this.$slots.default)
  },
  // props: {
  //   tag: {
  //     type: String,
  //     default: '默认标题'
  //   }
  // }
})