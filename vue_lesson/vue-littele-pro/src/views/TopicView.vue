<template>
  <div v-if="topic" class="topic">
    <PanelContainer>
      <template #content>
        <div class="topic-content">
          <div class="topic-head">
            <h2>{{ topic.title }}</h2>
            <p>
              <span>{{ topic.author.loginname }}</span>
              <template v-if="userInfo">
                <el-button
                  @click="collect"
                  v-if="!topic.is_collect"
                  type="success"
                  >收藏</el-button
                >
                <el-button
                  @click="deCollect"
                  v-if="topic.is_collect"
                  type="default"
                  >取消收藏</el-button
                >
              </template>
            </p>
          </div>
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
          :userInfo="userInfo"
        />
      </template>
    </PanelContainer>
    <!-- 评论框 -->
    <PanelContainer v-if="userInfo">
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
import { collectTopic, deCollectTopic, getTopic } from "../http/api";
import { mapState } from "vuex";
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
    ...mapState(["userInfo"]),
    accesstoken() {
      const accesstoken = localStorage.getItem("accesstoken");
      return accesstoken || ''
    },
  },
  async created() {
    let params = { id: this.id };
    if(this.accesstoken){
      params.accesstoken = this.accesstoken
    }
    const res = await getTopic(params);
    this.topic = res.data;
  },
  methods: {
    // 收藏
    async collect() {
      const { topic, accesstoken } = this;
      await collectTopic({ topic_id: topic.id, accesstoken  });
      // console.log(res)
      this.topic.is_collect = true
    },
    // 取消收藏
    async deCollect() {
      const { topic, accesstoken } = this;
      await deCollectTopic({ topic_id: topic.id, accesstoken  });
      // console.log(res)
      this.topic.is_collect = false
    },
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
  .topic-head p {
    display: flex;
    justify-content: space-between;
  }
}
</style>