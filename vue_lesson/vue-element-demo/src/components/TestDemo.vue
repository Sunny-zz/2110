<template>
  <div>
    <h2 class="title">测试</h2>
    <el-rate @change='change' :value="book.importance"></el-rate>
     <el-rate v-model="importance"></el-rate>
  </div>
</template>

<script>
export default {
  props: ['book'],
  methods: {
    change(num) {
      this.$emit('changeImportance', num)
    }
  },
  computed: {
    importance: {
      get(){
        return this.book.importance
      },
      set(num){
        this.$emit('changeImportance', num)
      }
    }
  },
}
</script>

<style scoped>
.title {
  color: blueviolet;
}
</style>