<template>
  <div class="search-form">
    <input :value="searchText" @input="$emit('update:searchText', $event.target.value)"  type="text">
    <br>
    <input :checked='stocked' @change="$emit('update:stocked', $event.target.checked)" type="checkbox" name="" id="stocked">
    <label for="stocked">only is stocked</label>
  </div>
</template>

<script>
export default {
  props: ['searchText', 'stocked'],
  data() {
    // 因为父组件计算 showProducts 的时候需要依据 子组件的搜索的内容以及是否有库存这两个数据。所以就需要子组件传给父组件
    // 但是我们只学过父组件传递方法给子组件子组件将父需要的内容当作参数传递过去， 我们现在的情景 父组件不需要传递方法给子组件。
    // 所以将数据定义到父组件
    return {

    }
  },
}
</script>

<style>
.search-form {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>