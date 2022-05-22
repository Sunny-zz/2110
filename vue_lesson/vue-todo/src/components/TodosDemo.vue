<template>
  <div class="todos-demo">
    <h3>todos</h3>
    <TodoForm @add="add" />
    <TodoList
      v-if="todos"
      :editId="editId"
      :showTodos="showTodos"
      @del="del"
      @changeTodo="changeTodo"
      @changeEditId='changeEditId'
    />
    <!-- 当发请求获取的时候 需要 gif 等待 -->
    <!-- 当获取之后 由内容就展示 -->
    <!-- 当获取内容为空    暂无待办事项 请添加   而且底部 footer 也不应该展示 -->
    <div v-else-if="!todos">
      <img
        style="width: 100%"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180509%2F82fef609b32a4efa89b3608c02628d1e.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655708168&t=1022d2e61e3b1a99a1c1514dc0c44320"
        alt=""
      />
    </div>
    <!-- <TodoFooter :showType.sync="showType" :getNumByType="getNumByType" /> -->
    <TodoFooter
      v-if="todos && todos.length"
      v-model="showType"
      :getNumByType="getNumByType"
    />
  </div>
</template>

<script>
import request from "../plugins/request";
import TodoFooter from "./TodoFooter.vue";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
export default {
  components: { TodoForm, TodoList, TodoFooter },
  data() {
    return {
      // 为了做等待效果 将 todos 初始值定义成 null  代表没有向后请求呢    [] 表示请求回来内容    [{}] 请求回来有内容
      todos: null,
      // 当定义 data 的时候，个人尽可能的越少定义越好，而且 data 越简单越好。
      // 当某些 data 可以通过 其他的 data 演变(计算)而来，那么这个计算出来的 data 不能设置，需要写成 计算属性(提倡) 或 methods 内
      // 上述的计算属性 最好跟 data 写在同一个组件，不要写到子组件或后代组件中。因为写在 data 同级的话，可以向下 复用。
      showType: "all",
      editId: "",
    };
  },
  computed: {
    // activeNum() {
    //   return this.todos.filter(todo => !todo.isCompleted).length
    // },
    // isHasCompletedTodo(){
    //   return this.todos.some(todo => todo.isCompleted)
    // }
    // 计算属性传参  由于上面的两个计算属性底层的计算都一样 就想合并，合并的话有两种做法
    // 1. 将所有数值计算好，当成对象返回

    // todosAllStatusNum(){
    //   const activeNum = this.todos.filter(todo => !todo.isCompleted).length
    //   const completedNum = this.todos.filter(todo => todo.isCompleted).length
    //   return {
    //     activeNum, completedNum, total: this.todos.length
    //   }
    // }

    // 2. 计算属性传参  并不推荐使用
    // 需要将计算属性写成返回一个函数的函数，内层函数的返回值是计算属性  参数传递给内层函数
    getNumByType() {
      return (type) => {
        return this.todos.filter((todo) =>
          type === "active" ? !todo.isCompleted : todo.isCompleted
        ).length;
      };
    },
    showTodos() {
      // const type = this.showType;
      // const todos = this.todos
      const { showType: type, todos } = this;
      if (type === "all") {
        return todos;
      } else if (type === "active") {
        return todos.filter((todo) => !todo.isCompleted);
      } else {
        return todos.filter((todo) => todo.isCompleted);
      }
    },
  },
  async created() {
    // 项目中用到很多 axios 请求，一般都会对 axios 进行封装
    const res = await request.get("/todos");
    // console.log(res)
    this.todos = res;
  },
  methods: {
    add(todo) {
      this.todos.push(todo);
    },
    async del(id) {
      await request.delete(`/todos/${id}`);
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    // 修改 todo 请求
    // 地址  http://localhost:3008/todos/:id
    // 方法  patch
    // 参数  要修改的内容  {isCompleted: 某值}
    // 返回值 修改好之后的 todo
    // 修改 todo 的完成状态  直接取反 不需要传参
    async changeTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      const res = await request.patch("/todos/" + id, {
        isCompleted: !todo.isCompleted,
      });
      todo.isCompleted = res.isCompleted;
    },
    changeEditId(id) {
      this.editId = id;
    },
  },
};
</script>

<style>
.todos-demo {
  width: 550px;
  margin: 40px auto;
  background-color: #fff;
  box-shadow: 0px 0px 8px #ccc;
}
.todos-demo h3 {
  text-align: center;
  margin-bottom: 20px;
  padding-top: 20px;
  font-size: 40px;
  font-weight: bold;
}
</style>