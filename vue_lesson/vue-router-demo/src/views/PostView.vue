<template>
  <div v-if="post">
    <h3>{{post.title}}</h3>
    <p><span>作者: {{post.author.loginname}}</span> <span>创建时间: {{post.create_at| moment("dddd, MMMM Do YYYY") }}</span></p>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
// 展示文章内容需要 发请求获取文章数据
// 接口
// 地址 https://cnodejs.org/api/v1/topic/:id
// 方法 get
// 返回值 文章详情数据   

// 默认先展示文章标题和作者姓名即可  文章内容 需要使用  v-html 指令


export default {
  data() {
    return {
      post: null
    }
  },
  // filters: {
  //   dateFormat: function(value) {
  //     return moment(value).format('YYYY.MM.DD, h:mm:ss');
  //   }
  // },
  async created () {
    const res = await this.$http.get(`/topic/${this.$route.params.id}`)
    this.post = res.data
  },
}
</script>

<style>
.markdown-text {
  font-size: 20px;
}
</style>