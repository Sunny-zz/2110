<template>
  <div class="topics-item">
    <router-link :to="`/topic/${topic.id}`">{{topic.title}}</router-link>
  </div>
</template>

<script>
export default {
  props: ['topic']
}
</script>

<style lang="less" scoped>
.topics-item {
  padding: 10px;
  border-top: 1px solid #ccc;
}
.topics-item:last-child {
  border-bottom: 1px solid #ccc;
}
</style>