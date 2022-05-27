<template>
  <tr>
    <td>{{index+ 1}}</td>
    <td>{{time}}</td>
    <td>{{title}}</td>
    <td>{{author}}</td>
    <td>
      <span v-for="number in importance" class="icon-xingxing iconfont importance" :key="number"></span>
    </td>
    <td>{{visit_count}}</td>
    <td>
      <button>编辑</button>
      <button @click="del">删除</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['time','title','author','importance','visit_count','index', 'id'],
  methods: {
    del() {
      const n = confirm('是否真的要删除吗？')
      if(n) {
        this.$emit('delBook' , this.id)
      }
    }
  },
}

</script>

<style>
.importance{
  font-size: 20px;
}
</style>