<template>
  <div>
    <h3>条件渲染</h3>
    <button @click="show = !show">切换</button>
    <div v-if="show" class="box5"></div>

    <template v-if="show">
      <h4>测试</h4>
      <input type="text" />
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true,
  }),
};
</script>

<style>
.box5 {
  width: 400px;
  height: 400px;
  background-color: #ccc;
}
</style>