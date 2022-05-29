<template>
  <!-- 布局容器组件 -->
  <!-- 需要父组件提供给我 展示的内容   比如 header  main  footer 部分 -->

  <!-- 子组件接收父组件的 具名插槽 -->
  <div class="layout-demo">
    <div v-if="$slots.header" class="header"></div>
    <div v-if="$slots.main" class="main">
      <slot name='main' />
    </div>
    <div v-if="$slots.default" class="footer">
      <!-- slot 标签不传递 name 其实默认是 default -->
      <!-- <slot name='default' /> -->
      <slot  />
    </div>
    <div v-if="$slots.aside" class="aside">
      <slot name='aside' />
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    // console.log(this);
  },
};
</script>

<style>
</style>