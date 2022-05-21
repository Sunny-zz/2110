<template>
  <div class="todo-footer">
    <span> 3 items left</span>
    <div class="action-btns">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
    <button class="clear-completed" v-if='true'>Clear completed</button>
    <span class="clear-completed-copy" v-else></span>
  </div>
</template>

<script>
export default {

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
</style>