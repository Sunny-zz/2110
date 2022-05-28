<template>
  <div class="table-demo">
    <div class="search">
      <input
        ref="inp"
        v-model.trim="searchTitle"
        type="text"
        placeholder="标题"
      />
      <select v-model.number="importance">
        <option value="0"></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="searchBooks">搜索</button>
      <button @click="open('Create')">添加</button>
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
          @open="open"
          @changeNewBook="changeNewBook"
        />
      </tbody>
    </table>
    <div v-else-if="!books.length && !isLoading">暂无数据</div>
    <DialogDemo
      @close="close"
      :visibility="visibility"
      @onOk="onOk"
      :dialogTitle="dialogTitle"
    >
      <!-- 传递插槽给子组件 -->
      <div class="time">
        <label for="time">时间</label>
        <input v-model="newBook.time" type="datetime-local" name="" id="time" />
      </div>
      <br />
      <br />
      <div class="title">
        <label for="title">标题</label>
        <input v-model="newBook.title" type="text" name="" id="title" />
      </div>
      <br />
      <br />
      <div class="author">
        <label for="author">作者</label>
        <input v-model="newBook.author" type="text" name="" id="author" />
      </div>
      <br />
      <br />
      <div class="importance">
        <label for="title">重要性</label>
        <div>
          <span
            v-for="i in 3"
            :key="i"
            :class="[
              'iconfont',
              importanceActiveIndex >= i ? 'icon-xingxing' : 'icon-star',
              { 'all-select': importanceActiveIndex === 3 },
            ]"
            @mouseenter="importanceActiveIndex = i"
            @mouseleave="importanceActiveIndex = newBook.importance"
            @click="newBook.importance = i"
          ></span>
        </div>
      </div>
      <br />
      <br />
    </DialogDemo>
  </div>
</template>

<script>
import BookItem from "./BookItem.vue";
import DialogDemo from "./DialogDemo.vue";
export default {
  components: { BookItem, DialogDemo },
  data() {
    return {
      // 书籍数组
      books: [],
      // 得等待效果
      isLoading: false,
      // 搜索的重要性
      importance: 1,
      // 搜索的标题
      searchTitle: "",
      // 弹出的出现消失
      visibility: false,
      // 新书籍对象
      newBook: {
        title: "",
        time: "",
        importance: 1,
        author: ""
      },
      // 重要性的划过索引
      importanceActiveIndex: 1,
      // 对话框的标题
      dialogTitle: "默认标题",
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
      const queryStr =
        importance === 0
          ? `?title_like=${searchTitle}`
          : `?title_like=${searchTitle}&importance=${importance}`;
      const books = await this.$http.get(`/books${queryStr}`);
      this.books = books;
      this.isLoading = false;
    },

    open(type) {
      this.visibility = true;
      this.dialogTitle = type;
    },
    close() {
      this.visibility = false;
      // 因为对话弹窗有多个功能(添加 和 修改)，添加取消或者修改取消之后，或者完成之后 对话框的状态(newBook 以及 importanceActiveIndex)需要还原
      this.newBook = {
        title: "",
        time: "",
        importance: 1,
        author: "",
      };
      this.importanceActiveIndex = 1;
      // console.log('关闭成功')
    },
    // 确定按钮事件
    // 添加功能
    async onOk() {
      // console.log(this.newBook)
      // 检验 newBook   循环数组去查
      const { newBook, dialogTitle } = this;
      // 我们会根据 dialogTitle 来区分什么时候是添加或者编辑
      if (dialogTitle === "Create") {
        if (newBook.title && newBook.time && newBook.author) {
          // 发请求给后端更新数据
          // 地址  /books
          // 方法  post
          // 参数  书籍对象(无 id 的)
          // 返回值 添加好的书籍对象(带 id 的)
          // 更新前端
          const res = await this.$http.post("/books", {
            ...newBook,
            visit_count: 0,
          });
          this.books.push(res);
          // console.log('添加成功')
          
        }
      } else {
        // console.log('编辑')
        // 发请求给后端编辑书籍数据
        // 地址  /books/:id
        // 方法  patch
        // 参数  书籍对象（要修改的属性）
        // 返回值 修改好书籍对象(带 id 的)
        // 更新前端
        // 当没有修改的时候是不需要发送编辑请求的
        // 获取原来的 book  然后跟 newBook 
        const res = await this.$http.patch("/books/" + newBook.id , newBook);

        this.books.splice(this.books.findIndex(book => book.id === res.id), 1, res)
      }

      this.close();
    },
    changeNewBook(book) {
      this.newBook = book;
      this.importanceActiveIndex = book.importance;
    },

    // 添加功能做完之后。 做编辑功能也是 onOk 事件
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
.all-select {
  color: rgb(240, 230, 44);
}
</style>