<template>
  <!-- 商品组件 -->
  <div class="goods">
    <p>{{goodsName}}</p>
    <h4>{{price}}</h4>
  </div>
</template>

<script>
export default {
  // props: ['goodsName', 'price']
  props: {
    goodsName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    },
  },
};
</script>

<style>
.goods {
  width: 200px;
  height: 200px;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>