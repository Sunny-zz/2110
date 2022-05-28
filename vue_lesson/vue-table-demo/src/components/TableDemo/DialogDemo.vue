<template>
  <!-- 对话框组件 -->
  <div v-show="visibility" @click.self="$emit('close')" class="dialog-mask">
    <div class="dialog-demo">
      <div class="dialog-header">
        <h4>{{dialogTitle}}</h4>
        <span @click="$emit('close')">x</span>
      </div>
      <div class="dialog-content">
        <!-- 对话框组件内容区域 很灵活的 父组件想要展示什么就展示什么， 所以不能写死，需要父组件传递 -->
        <!-- 传递的话使用 props 无法实现 -->
        <!-- 那么就需要使用 插槽 -->
        <!-- 在父组件中 使用子组件的时候在子组件的 开始和闭合标签之间传递的内容就是 插槽 -->
        <!-- 在子组件中 使用 <slot>  标签接收父组件传递的插槽  可以直接在 template 使用 -->
        <slot />
      </div>
      <div class="dialog-footer">
        <button @click="cancel">取消</button>
        <button @click="ok">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["visibility", "dialogTitle"],
  methods: {
    cancel() {
      this.$emit("close");
    },
    ok() {
      this.$emit("onOk")
    },
  },
};
</script>

<style>
.dialog-mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.dialog-demo {
  width: 600px;
  margin: 0 auto;
  margin-top: 200px;
  background-color: #fff;
}
.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
}
</style>