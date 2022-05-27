<template>
  <div class="search-demo">
    <SearchForm :searchText.sync="searchText" :stocked.sync="stocked" />
    <SearchContainer :showProducts="showProducts" />
  </div>
</template>

<script>
import SearchContainer from "./SearchContainer.vue";
import SearchForm from "./SearchForm.vue";
export default {
  components: { SearchForm, SearchContainer },
  data() {
    return {
      products: [],
      searchText: "",
      stocked: false,
    };
  },
  computed: {
    showProducts() {
      // const categories = this.products.reduce((res, product) => {
      //   if (!res.includes(product.category)) {
      //     res.push(product.category);
      //   }
      //   return res;
      // }, []);

      // const categories = [
      //   ...new Set(this.products.map((product) => product.category)),
      // ];

      // ['Sporting Goods', 'Electronics']
      // return categories.map((category) => ({
      //   category,
      //   list: this.products.filter((product) => product.category === category),
      // }));
      // [{category: 'xxx', list: []}, {category: 'xxx', list: []}]

      // searchText  ball    stocked  true
      return this.products.reduce((res, product) => {
        // 要求查看有库存的
        if (this.stocked && !product.stocked) {
          return res;
        }
        // 如果商品名文字不匹配
        if (!product.name.includes(this.searchText)) {
          return res;
        }

        const obj = res.find((item) => item.category === product.category);

        obj
          ? obj.list.push(product)
          : res.push({
              category: product.category,
              list: [product],
            })

        return res
      }, []);

      // [[], []]

      // {goos: [], el: []}
    },
  },
  async created() {
    const res = await this.$http.get("/productList");
    this.products = res;
  },
};
</script>

<style>
.search-demo {
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>