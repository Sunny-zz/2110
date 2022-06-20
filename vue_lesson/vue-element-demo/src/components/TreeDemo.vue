<template>
  <div>
    <el-tree
      :data="tree"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tree: [
        {
          id: "1",
          name: "菜单1",
          list: [
            {
              id: "3",
              name: "菜单1-1",
              url: "/1-1",
            },
            {
              id: "4",
              name: "菜单1-2",
              list: [
                {
                  id: "6",
                  name: "菜单1-2-1",
                  url: "/1-2-1",
                },
                {
                  id: "7",
                  name: "菜单1-2-2",
                  url: "/1-2-2",
                },
              ],
            },
            {
              id: "5",
              name: "菜单1-3",
              url: "/1-3",
            },
          ],
        },
        {
          id: "2",
          name: "菜单2",
          url: "/2",
        },
      ],
      defaultProps: {
        children: "list",
        label: "name",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>

<style>
</style>