<template>
  <div v-if="topics.length">
    <div class="list">
      <TopicsItem v-for="item in topics" :key="item.id" :topic="item" />
    </div>
    <!-- 分页器  -->
    <!-- 分页  功能 -->
    <!-- 需要知道有多少页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="currentChange"
      :total="total"
      :page-size="20"
      :current-page.sync='currentPage'
    >
    </el-pagination>
  </div>
</template>

<script>
import TopicsItem from "../components/TopicsItem.vue";
import { getTopics } from "../http/api";
export default {
  components: { TopicsItem },
  props: ["tab"],
  data() {
    return {
      topics: [],
      total: 0,
      currentPage: 1
    };
  },
  watch: {
    tab: {
      async handler(tab) {
        if(tab && !['all', 'share', 'ask', 'job','dev', 'good'].includes(tab)){
          this.$router.push('/notfound')
        }
        const res = await getTopics({ params: { tab: tab, page: 1, limit: 20 } });
        this.topics = res.data;
        // 模拟请求返回值的总条数
        const total_nums = [423, 720, 280, 200, 120, 640];
        let index = 0;
        if (tab === "good") {
          index = 1;
        } else if (tab === "share") {
          index = 2;
        } else if (tab === "ask") {
          index = 3;
        } else if (tab === "job") {
          index = 4;
        } else if (tab === "dev") {
          index = 5;
        }
        this.total = total_nums[index];
        this.currentPage = 1
      },
      immediate: true,
    },
  },
  methods: {
    async currentChange(page) {
      const res = await getTopics({ params: { tab: this.tab, page, limit: 20 } });
      this.topics = res.data
    },
  },
};
</script>

<style lang="less" scoped>
.el-pagination {
  padding: 20px 0;
}
</style>