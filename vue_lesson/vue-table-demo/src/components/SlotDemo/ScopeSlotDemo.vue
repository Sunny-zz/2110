<template>
<!-- 帮忙展示列表内容 -->
  <div class="list">
    <ul>
      <li v-for="item in list" :key="item.id">
        <slot name='text' :text='item.text' a='100' />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style>

</style>