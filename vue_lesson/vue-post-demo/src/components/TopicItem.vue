<template>
  <div class="topic-item">
    <span v-if="isShowTag" :class="['tag', tagStyle]">{{
      topic | getTopicTagText
    }}</span>
    <h4>
      <router-link :to="{ name: 'topic', params: { id: topic.id } }">{{
        topic.title
      }}</router-link>
    </h4>
    <span class="time">{{ topic.last_reply_at | moment("from") }}</span>
  </div>
</template>

<script>
export default {
  props: ["topic"],
  computed: {
    isShowTag() {
      const { path } = this.$route;
      // /  /all  /good
      return (
        this.topic.top || path === "/" || path === "/all" || path === "/good"
      );
    },
    tagStyle() {
      const { top, good } = this.topic;
      return top || good ? "light" : "dark";
    },
  },
};
</script>

<style>
.topic-item {
  display: flex;
  align-items: center;
}
.topic-item h4 {
  flex-grow: 1;
  /* with: 100px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 20px;
}
.tag {
  display: block;
  padding: 4px;
  font-size: 12px;
  margin-right: 4px;
  border-radius: 3px;
  flex-shrink: 0;
}
.tag.light {
  background-color: rgb(58, 182, 9);
  color: #fff;
}
.tag.dark {
  background-color: #ccc;
  color: rgb(93, 91, 91);
}

.time {
  flex-shrink: 0;
}
</style>