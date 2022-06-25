<template>
  <!-- 公共布局组件 -->
  <div :style="`width: ${currentWidth}`" class="panel">
    <div v-if="$slots.head" class="panel-head">
      <slot name="head" />
    </div>
    <div class="panel-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>

export default {
  props: ['width'],
  computed: {
    currentWidth() {
      const {width} = this
      return width * 1 ?  width + 'px' : width
    }
  },
};
</script>

<style lang='less'>
  .panel {
    width: 85%;
    margin: 20px auto;
    border-radius: 5px;
    overflow: hidden;
    .panel-head{
      padding: 10px;
      background-color: #f6f6f6;
    }
    .panel-content {
      background-color: #fff;
      min-height: 100px;
    }
  }
</style>