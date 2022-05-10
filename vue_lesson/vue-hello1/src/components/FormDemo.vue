<template>
  <div>
    <h3>表单的输入绑定</h3>
    <!-- <input type="text">
    <input type="checkbox" name="" id="">
    <input type="checkbox" name="" id="">
    <input type="checkbox" name="" id="">
    <input type="checkbox" name="" id="">
    <select name="" id="">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <div>
      男<input type="radio" name="sex">
      女<input type="radio" name="sex">
    </div> -->
    <!-- <input type="text" @input="handleUsername" :value="username"> -->

    <!-- 使用 v-model 简写了  value 以及 @input -->
    <input type="text" v-model="username" />
    <textarea cols="30" rows="10" v-model="comment" ></textarea>
    <button @click="handleClick">展示 </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "213123",
      comment: ''
    };
  },
  methods: {
    // handleUsername(event){
    //   // 根据用户的输入 修改 username
    //   const value = event.target.value
    //   this.username = value
    //   console.log(this.username)
    // }
    handleClick() {
      console.log(this.username);
      console.log(this.comment);
    },
  },
};
</script>

<style>
</style>