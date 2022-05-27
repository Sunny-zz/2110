<template>
  <div class="table-demo">
    <div class="search">
      <input ref='inp' :value="searchTitle" type="text" placeholder="标题" />
      <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="searchBooks">搜索</button>
      <button>添加</button>
    </div>
    <div v-if="!books">等待。。。</div>
    <table v-else-if="books.length">
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
        <BookItem @delBook='delBook' v-for="(book, index) in showBooks" :key="book.id"  v-bind='{...book, index}' />
      </tbody>
    </table>
    <div v-else>暂无数据</div>
  </div>
</template>

<script>

import BookItem from "./BookItem.vue";
export default {
  components: { BookItem },
  data() {
    return {
      books: null,
      searchTitle: ''
    };
  },
  computed: {
    showBooks() {
      return this.books.filter(book => book.title.includes(this.searchTitle)) 
    }
  },
  async created () {
    const books = await this.$http.get('/books')
    this.books = books
  },

  // 删除 
  // 地址   localhost:3008/books/:id
  // 方法   delete
  // 参数   无
  // 返回值  无

  methods: {
    async delBook(id) {
      await this.$http.delete('/books/' + id)
      this.books = this.books.filter(book => book.id !== id)
    },
    searchBooks(){
      // console.log(this.searchTitle)
      const value = this.$refs.inp.value
      this.searchTitle = value

      // 其实以后的话是根据 searchTitle 向后端发送 搜索请求 获取数据更新页面
      // 地址  /books?title_like=xx     xx 就是输入的内容
      // 方法   get
      // 参数   无
      // 返回值 筛选之后的数组
    }
  },
};
</script>

<style>
.table-demo {
  width: 80%;
  margin: 0 auto;
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
</style>