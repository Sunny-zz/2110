<template>
  <div>
    <h3>侦听器</h3>
    <p>在下方输入问题只能是真或者假</p>
    <input v-model.lazy="question.value" type="text" />
    <p>上面问题的答案: {{ answer }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: {
        value: ''
      },
      answer: "",
    };
  },
  computed: {
    // answer() {
    //   // 根据 question 去找 answer
    //   // 计算属性中不允许出现异步
    //   let res;
    //   setTimeout(() => {
    //     if (this.question.length % 2 === 1) {
    //       res = "是";
    //     } else {
    //       res = "否";
    //     }
    //   }, 100);
    //   return res;
    // },
  },
  methods: {
    // handleBlur() {
    //   setTimeout(() => {
    //     if (this.question.length % 2 === 1) {
    //       this.answer = "是";
    //     } else {
    //       this.answer = "否";
    //     }
    //   }, 100);
    // },
    
  },
  watch: {
    // question(newValue){
    //   // newValue 表示的新的 question
    //   // console.log(newValue)
    //   setTimeout(() => {
    //     if (newValue.length % 2 === 1) {
    //       this.answer = "是";
    //     } else {
    //       this.answer = "否";
    //     }
    //   }, 100);
    // }
    question: {
      // question 变化执行的函数 handler
      // 侦听器的对象语法可以设置三个属性  
      // 1. handler  监听的函数   
      // 2. immediate 是布尔值，意思是进入组件上来执行不执行 监听函数 
      // 3. deep 布尔值，是否开启深层次侦听 当监听的是对象的话， 对象内的属性变化也会监听到

      // 当监听的内容是对象的话，只有当对象改变的时候才会触发监听函数
      handler(newValue) {
        setTimeout(() => {
          if (newValue.value.length % 2 === 1) {
            this.answer = "是";
          } else {
            this.answer = "否";
          }
        }, 100);
      },
      immediate: true,
      deep: true
    },
  },
};



</script>

<style>
</style>