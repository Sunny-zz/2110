<template>
  <div class="table-demo">
    <div class="search">
      <input
        ref="inp"
        v-model.trim="searchTitle"
        type="text"
        placeholder="标题"
      />
      <select v-model.number='importance'>
        <option value="0"></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="searchBooks">搜索</button>
      <button @click="open">添加</button>
    </div>
    <div class="loading" v-if="isLoading">等待。。。</div>
    <table v-if="books.length">
      <thead>
        <tr>
          <th>序号</th>
          <th>时间</th>
          <th>标题</th>
          <th>作者</th>
          <th>重要性</th>
          <th>阅读数</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <BookItem
          @delBook="delBook"
          v-for="(book, index) in books"
          :key="book.id"
          v-bind="{ ...book, index }"
        />
      </tbody>
    </table>
    <div v-else-if="!books.length && !isLoading">暂无数据</div>
    <DialogDemo @close='close' :visibility="visibility" />
  </div>
</template>

<script>
import BookItem from "./BookItem.vue";
import DialogDemo from './DialogDemo.vue';
export default {
  components: { BookItem, DialogDemo },
  data() {
    return {
      books: [],
      searchTitle: "",
      isLoading: false,
      importance: 1,
      visibility: false 
    };
  },
  async created() {
    this.isLoading = true;
    const books = await this.$http.get("/books");
    this.isLoading = false;
    this.books = books;
  },

  // 删除
  // 地址   localhost:3008/books/:id
  // 方法   delete
  // 参数   无
  // 返回值  无

  methods: {
    async delBook(id) {
      await this.$http.delete("/books/" + id);
      this.books = this.books.filter((book) => book.id !== id);
    },
    async searchBooks() {
      // console.log(this.searchTitle)
      // const value = this.$refs.inp.value
      // this.searchTitle = value

      // 其实以后的话是根据 searchTitle 向后端发送 搜索请求 获取数据更新页面
      // 地址  /books?title_like=xx&importance=num     xx 就是输入的内容    num 是重要性的值
      // 方法   get
      // 参数   无
      // 返回值 筛选之后的数组
      const { searchTitle, importance } = this;
      // 发请求
      this.isLoading = true;
      const queryStr = importance === 0 ? `?title_like=${searchTitle}` : `?title_like=${searchTitle}&importance=${importance}`
      const books = await this.$http.get(`/books${queryStr}`) 
      this.books = books;
      this.isLoading = false;
    },
    open(){
      this.visibility = true
    },
    close(){
      this.visibility = false
    }
  },
};
</script>

<style>
.table-demo {
  width: 80%;
  margin: 0 auto;
  position: relative;
  min-height: 500px;
}
.table-demo .search {
  padding: 20px 0;
  display: flex;
  /* justify-content: space-between; */
}
.table-demo table {
  width: 100%;
  border-collapse: collapse;
}
.table-demo table th,
.table-demo table td {
  border: 1px solid #ccc;
  padding: 10px 15px;
}
.loading {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 40px;
  text-align: center;
  position: absolute;
}
</style>