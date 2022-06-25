<template>
  <div class="login">
    <el-form
      :model="userInfo"
      status-icon
      label-width="80px"
      :rules="rules"
      ref="ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          type="text"
          v-model.trim="userInfo.username"
          placeholder="请输入用户名(任意值都行)"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model.trim="userInfo.password"
          placeholder="请输入密码(用户token)"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "../http/api";
export default {
  data() {
    return {
      userInfo: {
        username: "admin",
        password: "7de298fc-2bae-4afb-b20b-ca85130e4159",
      },
      rules: {
        username: [
          {
            validator(rule, value, callback) {
              if (value === "") {
                callback(new Error("请输入用户名"));
              } else {
                callback();
              }
            },
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            validator(rule, value, callback) {
              if (value === "") {
                callback(new Error("请输入用户名"));
              } else {
                callback();
              }
            },
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login({ accesstoken: this.userInfo.password })
            .then((res) => {
              this.$message({
                message: "登录成功",
                type: "success",
                duration: 1000
              });
              
              const userInfo =  {
                loginame: res.loginname,
                avatar_url: res.avatar_url,
                id: res.id
              }
              localStorage.setItem('userInfo', JSON.stringify(userInfo))
              this.$store.commit('getUserInfo', userInfo)
              this.$router.push("/");
            })
            .catch(() => {
              this.$message({
                message: "密码有误(token有误)",
                type: "error",
                duration: 1000
              });
            });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
// 7fe004e4-7c63-4de6-8019-7382f2379d93
// 7de298fc-2bae-4afb-b20b-ca85130e4159
</script>

<style lang='less'>
.login {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .el-form {
    width: 40%;
    margin: 100px auto;
  }
}
</style>