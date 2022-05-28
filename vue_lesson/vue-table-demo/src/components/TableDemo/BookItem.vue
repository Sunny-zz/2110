<template>
  <tr>
    <td>{{index+ 1}}</td>
    <td class="time">{{time}}</td>
    <td class="title">{{title}}</td>
    <td>{{author}}</td>
    <td>
      <span v-for="number in importance" class="icon-xingxing iconfont importance" :key="number"></span>
    </td>
    <td>{{visit_count}}</td>
    <td class="action">
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
.action{
  width: 88px;
}
</style>