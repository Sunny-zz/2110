<template>
  <div class="search-demo">
    <SearchForm />
    <SearchContainer :products='products' />
  </div>
</template>

<script>
import SearchContainer from './SearchContainer.vue'
import SearchForm from './SearchForm.vue'
export default {
  components: { SearchForm, SearchContainer },
  data() {
    return {
      products: []
    }
  },
  async created () {
   const res = await this.$http.get('/productList')
   this.products = res
  },
}
</script>

<style>
.search-demo{
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 10px;
}

</style>