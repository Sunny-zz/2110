<template>
  <div class="menu">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <MenuList :menuList="menuList" />
    </el-menu>
  </div>
</template>

<script>
import MenuList from './MenuList.vue';
export default {
  components: { MenuList },
  data() {
    return {
      menuList: [
        {
          id: "1",
          name: "菜单1",
          list: [
            {
              id: "3",
              name: "菜单1-1",
              url: "/1-1"
            },
            {
              id: "4",
              name: "菜单1-2",
              list: [
                {
                  id: "6",
                  name: "菜单1-2-1",
                  url: "/1-2-1"
                },
                {
                  id: "7",
                  name: "菜单1-2-2",
                  url: "/1-2-2"
                },
              ],
            },
            {
              id: "5",
              name: "菜单1-3",
              url: "/1-3"
            },
          ],
        },
        {
          id: "2",
          name: "菜单2",
          url: "/2"
        },
      ],
    };
  },
  methods: {
    
  },
};
</script>

<style>
.menu {
  width: 201px;
}
</style>