<template>
  <div class="login">
    <h2>登录页</h2>
    <div>
      <label for="username">用户名: </label>
      <input v-model.trim="username" id="username" type="text" />
    </div>
    <div>
      <label for="password">密码:</label>
      <input v-model.trim="password" id="password" type="password" />
    </div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const { username, password } = this;
      if (!username) {
        alert("请输入用户名");
        return;
      }

      if (!password) {
        alert("请输入密码");
        return;
      }

      // 登录
      // get   http://localhost:3008/users?username=xx&password=xxx
      // 结果是 数组 例如   [] 没有用户      [{}] 有用户

      // 登录成功 跳转到首页  $router.push(地址)

      // 不成功提示用户名密码不匹配

      axios
        .get("http://localhost:3008/users", {
          params: {
            username,
            password,
          },
        })
        .then((res) => {
          const {data} = res
          if(data.length){
            // 使用 localStorage 或者 sessionStorage 存储用户名
            // 两个的区别 localStorage 存的内容只要不删除，就一直在浏览器中， sessionStorage 存的内容只要浏览器窗口关闭了就自动消失 换一个窗口没有当前 session

            // 本地存储只能存基础类型(不能存储对象)，需要存储对象的话 将对象转化成 json 串，再存
            // console.log(data)
            // sessionStorage.setItem('username', data[0].username)

            sessionStorage.setItem("user", JSON.stringify({
              username: data[0].username,
              avatar_url: data[0].avatar_url
            }))
            
            this.$router.push('/')
          }else{
            alert('用户名密码不匹配')
          }
        });
        
    },
  },
};

// vue 路由和路由之间的交互
// - 地址栏交互 在后面的组件中使用 $route 或者利用组件传参获取
// - ajax
// - 浏览器本地存储   localStorage  sessionStorage  
</script>

<style>
.login {
  width: 300px;
  margin: 0 auto;
}
</style>