<template>
  <div class="app">
    <h2 class="title">hello element ui</h2>
    <el-button
      class="my-btn"
      @click="login"
      type="primary"
      :loading="isLoading"
      round
      icon="el-icon-share"
    >
      登录
    </el-button>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="icon-Calendar iconfont"></i>
    <TestDemo :book="book"  @changeImportance='changeImportance' />
    
    <div>{{book}}</div>
    <hr>
    <!-- <TableDemo  /> -->
    <hr>
    <MenuDemo />
    <hr>
    <TreeDemo />
    <hr>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="select date">
    </el-date-picker>
    <hr>
    <ScssDemo />
    <LessDemo />
    <hr>
    <SwiperDemo />
  </div>
</template>

<script>
import LessDemo from './components/LessDemo.vue';
import MenuDemo from './components/MenuDemo.vue';
import ScssDemo from './components/ScssDemo.vue';
import SwiperDemo from './components/SwiperDemo.vue';

// import TableDemo from './components/TableDemo.vue';
import TestDemo from "./components/TestDemo.vue";
import TreeDemo from './components/TreeDemo.vue';
export default {
  components: { TestDemo, MenuDemo, TreeDemo, ScssDemo, LessDemo, SwiperDemo},
  data() {
    return {
      isLoading: false,
      value: 0,
      book: {
        id: '1gtyy6',
        importance: 2
      },
      text: '',
      value1: ''
    };
  },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  },
  methods: {
    login() {
      console.log("登录");
    },
    changeImportance(num) {
      this.book.importance = num
    }
  },
};
</script>

<style scoped>
/* 样式 scoped 的作用是将组件样式私有化 其实就是给组件内所有的元素加上了一个 data-v-xxxx 属性。 所有的样式选择器也都加上了 该属性的属性选择*/

/* 并不是给所有元素添加了 data-v-xxx 除了 组件内部的之外 */
/* 可以使用   /deep/  来修改子组件的样式 */
.title {
  color: red;
}

.app /deep/ .my-btn span {
  margin-left: 5px;
}
</style>