<template>
  <div class="comment-demo">
    <div class="comment-form">
      <textarea cols="30" rows="10"></textarea>
      <button>提交</button>
    </div>
    <div class="comment-list">
      <h4>评论</h4>
      <div v-if="comments.length" class="comments">
        <CommentItem
          v-for="comment in comments"
          :key="comment.id"
          v-bind="comment"
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
      }, 1000)
    });
  },
  mounted() {},
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