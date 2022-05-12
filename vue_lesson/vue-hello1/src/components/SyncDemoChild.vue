<template>
    <!-- <button @click="$emit('change', 1000)">按钮</button> -->
    <button @click="handleClick">按钮{{num}}</button>
</template>

<script>
export default {
  props: ['text', 'num'],
  methods: {
    handleClick(){
      this.$emit('update:num', 10000)
    }
  },
}
</script>

<style>

</style>