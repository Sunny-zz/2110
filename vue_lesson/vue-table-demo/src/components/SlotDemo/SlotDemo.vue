<template>
  <div class="slot-demo">
    <h3>插槽</h3>
    <LinkDemo href="http://www.baidu.com">
      <!-- 这地方是插槽内容，不能访问子组件, 只能访问父组件的内容 -->
      <!-- 其实可以使用作用于插槽来实现访问子组件 -->
      <!-- <span>
        <span>百度</span>
        <span>图标</span>
      </span> -->
    </LinkDemo>
    <LayoutDemo>
      <!-- 传递 插槽 的时候需要告诉子组件 传递的都是哪部分内容 -->
      <!-- 默认子组件用 slot 标签接收 所有的 插槽内容，没法拆分 -->
      <!-- 所以需要使用 具名插槽传递插槽，对应的子组件要接收具名插槽  具名插槽就是带名字的插槽 -->

      <!-- 具名插槽需要使用  template 包裹然后使用 v-slot 指令命名  -->
      <!-- v-slot:名  可以简写成  #名-->
      <!-- 插槽名字可以设置成动态的 需要使用 [] 包裹 -->
      <template #[name]>
        <aside>
          <h3>我是 aside</h3>
        </aside>
      </template>
      <template #main>
        <main>
          <h3>我是 main</h3>
        </main>
      </template>
      <!-- 插槽没有 template 包裹 其实默认是 default 具名插槽 -->
      <footer>
        <h3>我是 footer</h3>
      </footer>
    </LayoutDemo>
    <hr>
    <!-- 希望子组件展示列表的时候 文字的展示 希望很是随意，比如使用 p 标签展示， 使用 span  使用 h, 这种需求 子组件自己很难实现 -->
    <!-- 需要父组件提供一个 列表项模板 -->
    <!-- 需要传递插槽, 并且插槽内还要使用 item，而 item 是子组件循环才可以获取到的. 所以需要使用作用域插槽，也就是子组件给 插槽 slot 传递数据 -->
    <!-- 父组件中 v-slot 指令可以接受子组件传递的插槽数据(prop)  语法  v-slot='名'  这个名字表示子组件传递的插槽数据对象  -->

    <!-- v-slot 语法 -->
    <!-- 有两层含义   -->
    <!-- 1. 提供插槽名称   v-slot:名 简写   #名 -->
    <!-- 2. 接收子组件传递的插槽数据  v-slot:名='props'  名表示插槽名， props 表示的是传递是数据对象  当名是默认插槽的时候可以省略，因为 props 是数据对象所以我们可以使用解构赋值来获取子组件传递的插槽数据 -->
    <ScopeSlotDemo :list="list" >
      <template v-slot:text='{text, a}' >
        <p>{{text}} + {{a}}</p>
      </template>
    </ScopeSlotDemo>
    <!-- <ScopeSlotDemo :list="list" v-slot='slotProps' >
      <p>{{slotProps.text}} + {{slotProps.a}}</p>
    </ScopeSlotDemo> -->
  </div>
</template>

<script>
import LayoutDemo from "./LayoutDemo.vue";
import LinkDemo from "./LinkDemo.vue";
import ScopeSlotDemo from './ScopeSlotDemo.vue';
export default {
  components: { LinkDemo, LayoutDemo, ScopeSlotDemo },
  data() {
    return {
      name: 'aside',
      list: [
        {
          id: 1,
          text: 'huayd'
        },
        {
          id: 2,
          text: '3e44'
        },
        {
          id: 3,
          text: '8i9u'
        }
      ]
    }
  },
};
</script>

<style>
</style>