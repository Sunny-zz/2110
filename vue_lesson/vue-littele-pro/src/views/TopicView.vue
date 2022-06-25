<template>
  <div v-if="topic" class="topic">
    <PanelContainer>
      <template #content>
        <h2>{{topic.title}}</h2>
      </template>
    </PanelContainer>
  </div>
</template>

<script>
import PanelContainer from "../components/PanelContainer.vue";
import { getTopic } from "../http/api";
export default {
  components: { PanelContainer },
  props: ["id"],
  data() {
    return {
      topic: null,
    };
  },
  async created() {
    const res = await getTopic({ id: this.id });
    console.log(res);
    this.topic = res.data
  },
};
</script>

<style lang="less" scoped>
</style>