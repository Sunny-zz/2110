<template>
  <div>
    <h3>列表渲染</h3>
    <ul>
      <!-- 当使用 v-for 的时候必须添加 key 而且每一个key 的值是不同的 在当前 v-for 中 key 不能相同 -->
      <li v-for="item in numbers" :key="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [1,2,3,4,5,6]
    }
  },
}
</script>

<style>

</style>