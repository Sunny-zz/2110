<template>
  <div>
    <template v-for="menu in menuList">
      <el-submenu
        v-if="menu.list && menu.list.length"
        :index="menu.id"
        :key="menu.id"
      >
        <template slot="title">{{ menu.name }}</template>
        <MenuList :menuList="menu.list" />
      </el-submenu>
      <el-menu-item @click="toUrl(menu.url)" v-else :index="menu.id" :key="menu.id">
        <span> {{ menu.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  props: ['menuList'],
  methods: {
    toUrl(url) {
      console.log(url)
    }
  },
};
</script>

<style>
</style>