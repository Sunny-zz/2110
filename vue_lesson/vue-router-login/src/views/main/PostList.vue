<template>
  <div>
    <h4>列表页</h4>
    <span>{{ a }}</span>

    <hr />
    <h4>动态组件</h4>
    <button @click="tab = 'PostsTab'">Posts</button>
    <button @click="tab = 'ArchiveTab'">Archive</button>
    <hr>
    <div class="tabs">
      <!-- 动态组件 不利用 v-if 去切换 tab 选项 -->
      <!-- 利用 vue 内置组件 component 的 is 属性 -->
      <!-- is 的值 需要写成组件名 -->
      <!-- component 会根据 is 的属性值 变成对应的组件 -->

      <!-- 动态组件还可以搭配 keep-alive 一起使用 -->
      <!-- keep-alive 的作用是缓存组件内部的状态， 当组件切换显示的时候保留之前的状态 -->
      <keep-alive include="PostsTab">
        <component :is="tab"  />
      </keep-alive>
      
    </div>
  </div>
</template>

<script>
import ArchiveTab from '../../components/ArchiveTab.vue';
import PostsTab from '../../components/PostsTab.vue';
export default {
  components: { PostsTab, ArchiveTab },
  props: ["type", "a"],
  watch: {
    type: {
      handler(newValue) {
        console.log(newValue ? newValue : "recommended");
        // 路由记录
        // 当如何页面组件被展示的时候，都会有一个路由记录， 路由记录可以使用 $route.matched 获取
        // 路由记录指的是 当前地址展示的 所有组件
        // 当我们给路由设置了 meta 字段的时候, 可以通过路由记录获取对应的 meta 字段
        // 一般设置 meta 字段就是设置当前页面的权限
        // 在全局前置守卫获取 meta 字段判断用户是否有权限， 是否可以进入对应页面
        // console.log(this.$route)
        // this.$route.matched.forEach(item => {
        //   console.log(item.meta)
        // });
      },
      immediate: true,
    },
  },
  data() {
    return {
      tab: 'PostsTab'
    }
  },
};
</script>

<style>
</style>