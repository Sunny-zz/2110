<template>
  <div class="product-container">
    <div class="form-title">
      <span>Name</span>
      <span>Price</span>
    </div>
    
    <!-- <template v-for="(product, index) in products">
      <ProductTitle v-if="index === products.findIndex(ele => ele.category === product.category)" :key="product.name" :title="product.category" />
      <ProductItem v-bind="product" :key="product.name + product.price"/>
    </template> -->
    <!-- [{c: 'g', list:[]}] -->
    <template v-for="item in showProducts">
      <ProductTitle :key="item.category" :title="item.category" />
      <!-- list -->
      <ProductItem v-for="product in item.list" :key="product.name" v-bind="product" />
    </template>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
import ProductTitle from './ProductTitle.vue'

export default {
  components: { ProductTitle, ProductItem },
  props: ['showProducts']
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