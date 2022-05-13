<template>
  <div class="comment-item">
    <div>
      <img style="width: 50px;" :src="author.avatar_url" alt="">
      <span>{{author.username}}</span>
      <span> : </span>
      <p style="display: inline-block;">{{commentText}}</p>
    </div>
    <div>
      <span>点赞{{likes_count}}</span>
      <span>评论{{reply_count}}</span>
    </div>
    <button>删除</button>
  </div>
</template>

<script>
export default {
  props: ['author', 'commentText', "likes_count", "reply_count"]
}
</script>

<style>

</style>