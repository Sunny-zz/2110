<template>
  <div v-if="topic" class="topic">
    <PanelContainer>
      <template #content>
        <div class="topic-content">
          <h2>{{ topic.title }}</h2>
          <p>
            <span>{{ topic.author.loginname }}</span>
          </p>
          <hr />
          <div class="topic-html" v-html="topic.content"></div>
        </div>
      </template>
    </PanelContainer>
    <!-- 评论列表 -->
    <PanelContainer v-if="topic.reply_count">
      <template #head>{{ topic.reply_count }} 回复</template>
      <template #content>
        <!-- 评论列表 -->
        <RepliesItem
          v-for="(reply, index) in topic.replies"
          :key="reply.id"
          :index="index"
          :reply="reply"
          :mostReplyUpsId="mostReplyUpsId"
        />
      </template>
    </PanelContainer>
    <!-- 评论框 -->
    <PanelContainer>
      <template #head> 添加回复</template>
      <template #content>
        <!-- 输入评论 -->
        <el-input type="textarea" v-model="replyText"></el-input>
        <el-button>提交</el-button>
      </template>
    </PanelContainer>
  </div>
</template>

<script>
import PanelContainer from "../components/PanelContainer.vue";
import RepliesItem from "../components/RepliesItem.vue";
import { getTopic } from "../http/api";
export default {
  components: { PanelContainer, RepliesItem },
  props: ["id"],
  data() {
    return {
      topic: null,
      replyText: "",
    };
  },
  computed: {
    mostReplyUpsId() {
      let id = "",
        num = 0;
      this.topic.replies.forEach((reply) => {
        if (reply.ups.length > num) {
          id = reply.id;
          num = reply.ups.length;
        }
      });
      return id;
    },
  },
  async created() {
    const res = await getTopic({ id: this.id });
    this.topic = res.data;
  },
};
</script>

<style lang="less" scoped>
.topic-content {
  padding: 20px 20px;
  /deep/ .topic-html {
    img {
      width: 100%;
    }
  }
}
</style>