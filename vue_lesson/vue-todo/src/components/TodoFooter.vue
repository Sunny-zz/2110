<template>
  <div class="todo-footer">
    <span>{{getNumByType('active')}} items left</span>
    <div class="action-btns">
      <button @click="changeType('all')" :class="{active: showType === 'all'}">All</button>
      <button @click="changeType('active')" :class="{active: showType === 'active'}">Active</button>
      <button @click="changeType('completed')" :class="{active: showType === 'completed'}">Completed</button>
    </div>
    <button class="clear-completed" v-if="getNumByType('completed')">Clear completed</button>
    <span class="clear-completed-copy" v-else></span>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'showType',
    event: 'changeType'
  },
  props: ['getNumByType', 'showType'],
  methods: {
    changeType( type ) {
      // this.$emit('update:showType', type)
      this.$emit('changeType', type)
    }
  },
}
</script>

<style>
.todo-footer{
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.clear-completed , .clear-completed-copy{
  width: 114px;
}
.todo-footer .action-btns button.active{
  color: red;
}
</style>