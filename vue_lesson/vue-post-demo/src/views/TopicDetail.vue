<template>
  <div v-if="topic">
    <h3>{{topic.title}} <span>{{ topic.create_at | moment('from')}}</span></h3>
    <div v-html="topic.content"></div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      topic: null
    }
  },
  async created () {
    const res = await this.$http.get(`/topic/${this.id}`)
    this.topic = res.data
  },
}
</script>

<style>

</style>