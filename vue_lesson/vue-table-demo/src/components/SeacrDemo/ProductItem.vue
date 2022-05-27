<template>
  <div :class="['product-item', {'no-stocked': !stocked}]">
    <span>{{name}}</span>
    <span>{{price}}</span>
  </div>
</template>

<script>
export default {
  props: ["name", "price","stocked"]
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
.product-item.no-stocked{
  color: red;
}
</style>