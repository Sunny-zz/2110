<template>
  <div :class="['reply', {active: mostReplyUpsId === reply.id}]">
    <router-link :to="`/user/${reply.author.loginname}`">
      <el-avatar shape="square" :size="30" :src="reply.author.avatar_url"></el-avatar>
    </router-link>
    <div class="reply-info">
      <div><span>{{reply.author.loginname}}</span> <span>{{index + 1}}楼 <span>·</span> {{reply.create_at}} </span></div>
      <p v-html="reply.content"></p>
    </div>
    <div class="operation">
      <span @click="handleLike"> <span :class="{'is-uped': reply.is_uped}">赞</span> {{reply.ups.length}}</span>
      <span v-if="userInfo">回</span>
    </div>
  </div>
</template>

<script>
import { replyLike } from '../http/api'
export default {
  props: ['reply', 'index', 'mostReplyUpsId', 'userInfo'],
  methods: {
    // 点赞逻辑
    // 点击点赞按钮执行电点赞事件，更新后端数据
    // 后端数据更新之后，需要更新前端，但是前段更新 点赞 很复杂，所以选择了重新请求整个文章， 进而更新 点赞数据
    async handleLike() {
      const accesstoken = localStorage.getItem('accesstoken')
      if(accesstoken){
        const res = await replyLike({reply_id: this.reply.id,accesstoken })
        console.log(res)
        this.$emit('getTopic')
      }else{
        this.$message({
          message : '请登录'
        })
      }
    }
  },
}
</script>

<style lang="less" scoped>
.reply {
  &.active{
    background-color: rgb(175, 205, 195);
  }
  display: flex;
  align-items: center;
  padding: 10px 10px 30px;
  border-top: 1px solid #ccc;
  .el-avatar , .operation{
    flex-shrink: 0;
  }
  .operation{
    .is-uped{
      color: red;
    }
  }
  .reply-info {
    flex-grow: 1;
    margin-left: 10px;
    margin-right: 10px;
  }
  
}
.reply:last-child {
  border-bottom: 1px solid #ccc;
}

</style>