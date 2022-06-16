<template>
  <div v-if="topicList.length" class="topic-list">
    <TopicItem v-for="topic in topicList" :key="topic.id" :topic="topic" />
  </div>
</template>

<script>
import TopicItem from "../components/TopicItem.vue";
export default {
  components: { TopicItem },
  data() {
    return {
      topicList: [],
    };
  },
  props: ["tab"],
  watch: {
    tab: {
      async handler(newValue) {
        const res = await this.$http.get("/topics", {
          params: {
            tab: newValue || "all",
          },
        });
        this.topicList = res.data;
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>