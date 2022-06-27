<template>
  <div :class="['reply', {active: mostReplyUpsId === reply.id}]">
    <el-avatar shape="square" :size="30" :src="reply.author.avatar_url"></el-avatar>
    <div class="reply-info">
      <div><span>{{reply.author.loginname}}</span> <span>{{index + 1}}楼 <span>·</span> {{reply.create_at}} </span></div>
      <p v-html="reply.content"></p>
    </div>
    <div class="operation">
      <span>赞 {{reply.ups.length}}</span>
      <span v-if="userInfo">回</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['reply', 'index', 'mostReplyUpsId', 'userInfo']
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