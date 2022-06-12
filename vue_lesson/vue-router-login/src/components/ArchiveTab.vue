<template>
  <div class="archive">
    <p>adsjhd askdg as das s</p>
    <input v-focus:x.test type="text" />
  </div>
</template>

<script>
// 自定义指令
// 局部指令
// 全局指令
export default {
  // 组件内的自定义指令
  directives: {
    // 指令名   
    // focus: {
    //   // 指令的定义
    //   inserted: function (el, binding) {
    //     const {value , arg, modifiers} = binding
    //     // arg 是指令参数    v-focus:xx   xx 就是参数
    //     console.log(arg)
    //     console.log(modifiers)
    //     if(value || value === undefined){
    //       el.focus()
    //     }
    //   },
    // },
  },
};
</script>

<style>
</style>