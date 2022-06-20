<template>
  <div class="less-demo">
    <h3>less 练习</h3>
    <span>12312</span>
    <div class="box"></div>
    <div class="box1"></div>
  </div>
</template>

<script>
export default {};
</script>


<style lang='less'>

// 1. 嵌套   2. 运算   3. 变量   4. 导入  5.混合
@import '../assets/style.less';
.less-demo {
  h3 {
    color: @mainColor;
    width: calc(100% - 100px);
  }
  > span{
    color: var(--main-color);
    &:hover {
      color: @mainColor;
    }
  }
  .b{
    width: 200px;
    height: 200px;
  }
  .box{
    .b();
    background-color: #000;
  }
  .box1{
    .b();
    background-color: red;
  }
}
</style>