<template>
  <div class="comment-demo">
    <div class="comment-form">
      <textarea v-model.trim="commentText" cols="30" rows="10"></textarea>
      <button @click="add">提交</button>
    </div>
    <div class="comment-list">
      <h4>评论</h4>
      <div v-if="comments.length" class="comments">
        <CommentItem
          v-for="comment in comments"
          :key="comment.id"
          v-bind="comment"
          @del='del'
          @like='like'

        />
      </div>
      <div v-else>稍等一下...</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CommentItem from "./CommentItem.vue";
export default {
  components: { CommentItem },
  data() {
    return {
      comments: [],
      commentText: "",
    };
  },
  // 组件出现的时候就需要获取 后端的数据 展示到组件上
  // 需要一个地方 这个地方进入页面就会触发
  // vue 组件的生命周期
  // created(组件数据 处理完毕了)   mounted(组件在页面中完全展示了)
  created() {
    // 一般是 created 内发请求获取后端数据 但是 vue 声明周期使用同步函数 请求是异步函数，所以发请求获取数据也可以写在 mounted
    // 如何获取数据
    // vue 中一般使用 axios
    // 需要下载 axios 然后在组件中导入使用
    axios.get("http://localhost:3008/comments").then((res) => {
      setTimeout(() => {
        this.comments = res.data;
      }, 300);
    });
  },
  methods: {
    add() {
      // 添加评论
      // "author": {
      //   "username": "用户12312",
      //   "avatar_url": "https://img2.baidu.com/it/u=4290982249,3925173898&fm=253&fmt=auto&app=138&f=PNG?w=200&h=200"
      // },
      const commentText = this.commentText;
      if (commentText) {
        // 添加评论
        const commentObj = {
          id: new Date().getTime().toString(),
          author: {
            username: "用户12312",
            avatar_url:
              "https://img2.baidu.com/it/u=4290982249,3925173898&fm=253&fmt=auto&app=138&f=PNG?w=200&h=200",
          },
          likes_count: 0,
          reply_count: 0,
          commentText
        }

        this.comments.push(commentObj)

        // 添加评论成之后需要清空评论内容

        this.commentText = ''

      } else {
        console.log("请输入有效内容");
      }
    },
    // 删除评论
    del(id){
      // 数组中删除一个元素  根据 id 去删除
      // [{id: 1},{id: 2},{id: 3}]  删除id3 
      this.comments = this.comments.filter(ele => ele.id !== id) 
      
    },
    // 评论点赞 
    like(id){
      // [{id: 1, likes: 10, isLiked: false},{id: 2, likes: 9, isLiked: false},{id: 3, likes: 8, isLiked: false}]
      // 3
      // 找到 id 为 3 的 修改 isLiked 为相反的值，然后根据 isLiked 修改 likes
      const comment = this.comments.find(ele => ele.id === id)
      comment.isLiked = !comment.isLiked
      // 现在 isLiked 是 true 的话，用户执行的是点赞操作，否则相反 
      comment.isLiked ? comment.likes_count++ : comment.likes_count--
    }
  },
};
</script>

<style>
.comment-demo {
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 40px;
}
.comment-demo .comment-form textarea {
  resize: none;
  width: 100%;
}
.comment-demo .comment-form {
  margin-bottom: 50px;
}
</style> 