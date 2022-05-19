<template>
  <div class="comment-item">
    <div>
      <img style="width: 50px;" :src="author.avatar_url" alt="">
      <span>{{author.username}}</span>
      <span> : </span>
      <p style="display: inline-block;">{{commentText}}</p>
    </div>
    <div>
      <span><i @click="$emit('like', id)" class="icon-dianzan iconfont"></i>{{likes_count||''}}</span>
      <span><i class="icon-pinglun iconfont"></i>{{reply_count === 0 ? '' : reply_count}}</span>
    </div>
    <button @click="handleDel">删除</button>
  </div>
</template>

<script>
export default {
  props: ['author', 'commentText', "likes_count", "reply_count", "id"],
  methods: {
    handleDel() {
      // 接收父组件传递的自定义事件并执行
      this.$emit("del", this.id)
    }
  },
}
</script>

<style>
.comment-item {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
.comment-item:first-child{
  border-top: 1px solid #ccc;
}
.comment-item i {
  cursor: pointer;
}

</style>