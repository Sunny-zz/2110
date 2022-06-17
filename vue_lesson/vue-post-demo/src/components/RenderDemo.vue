

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h3'
    }
  },
  // 渲染函数  就不需要 template 了
  // 一般有渲染函数的组件不写成 .vue 组件了
  // 直接使用 Vue.component 进行全局注册

  // 渲染函数默认接受一个 createElement 作为参数 一般写成 h
  // 在项目的 Bable 插件 3.4.0 以下必须填写这个参数
  // 渲染函数需要返回 html 作为 组件的 template
  render(){
    // 该函数内其实是写了 html 标签的
    // 这种语法被称为 jsx 语法  也就是在 js 中写 html。
    // 那么这个 html 中要写 js 的话需要使用 {} 包裹即可，标签名的话直接用
    return <this.tag>{this.$slots.default}</this.tag>
  }
}
</script>

<style>

</style>