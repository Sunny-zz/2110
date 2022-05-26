<template>
  <div class="product-item">
    <span>{{name}}</span>
    <span>{{price}}</span>
  </div>
</template>

<script>
export default {
  props: ["name", "price"]
}
</script>

<style>
.product-item{
  display: flex;
}
.product-item span:first-child{
  width: 40%;
}
.product-item span:nth-child(2){
  width: 60%;
}
</style>