<template>
  <div>
    <template v-for="menu in menuList">
      <el-submenu
        v-if="menu.list && menu.list.length"
        :index="menu.id"
        :key="menu.id"
      >
        <template slot="title">{{ menu.name }}</template>
      </el-submenu>
      <el-menu-item v-else :index="menu.id" :key="menu.id">
        {{ menu.name }}
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>