<template>
  <div class="product-container">
    <div class="form-title">
      <span>Name</span>
      <span>Price</span>
    </div>
    
    <template v-for="product in products">
      <ProductTitle :key="product.name" :title="product.category" />
      <ProductItem v-bind="product" :key="product.name"/>
    </template>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
import ProductTitle from './ProductTitle.vue'
export default {
  components: { ProductTitle, ProductItem },
  props: ['products']
}
</script>

<style>
.form-title{
  display: flex;
}
.form-title span:first-child{
  width: 40%;
}
.form-title span:nth-child(2){
  width: 60%;
}
</style>