<template>
  <div>
    <h3>列表渲染</h3>
    <!-- 当 goodsList 数据没有获取到的时候时不需要展示list 的 需要展示其他的内容  v-if 不要和 v-for 写在同一元素上 -->
    <ul v-if="goodsList.length">
      <!-- 当使用 v-for 的时候必须添加 key 而且每一个key 的值是不同的 在当前 v-for 中 key 不能相同 -->
      <li v-for="(item, index) in goodsList" :key="item.id">
        商品名: {{ item.goodsName + index }}
      </li>
    </ul>

    <hr />
    <ul>
      <li v-for="(value, key, index) in address" :key="value">
        {{ index + value + key }}
      </li>
    </ul>

    <!-- 当给 template 加 v-for 的时候 可以不能加载 template 上，要加在内部的所有根标签上，并且不能相同 -->
    <div>
      <template v-for="item in goodsList">
        <p :key="item.id">{{ item.goodsName }}</p>
        <span :key="item.goodsName">{{ item.price }}</span>
      </template>
    </div>

    <!-- 循环数据 展示一系列相同的组件 -->
    <!-- 在组件上使用 v-for -->
    <!-- <GoodsDemo
      v-for="item in goodsList"
      :key="item.id"
      :goodsName="item.goodsName"
      :price="item.price"
    /> -->
    <!-- 当需要将对象内的所有属性传递个子组件当作 props 的话可以使用 v-bind 指令简写 -->
    <GoodsDemo
      v-for="item in goodsList"
      :key="item.id"
      v-bind='item'
    />
    <!-- 上述 v-bind 的意思是 :id='item.id' :goodsName="item.goodsName" :price="item.price" 将 item 下的所有属性当作 props 向下传递 -->
  </div>
</template>

<script>
import GoodsDemo from "./GoodsDemo.vue";

export default {
  components: { GoodsDemo },
  data() {
    return {
      goodsList: [
        {
          id: "8u98",
          goodsName: "电脑",
          price: 10000,
        },
        {
          id: "dasd123",
          goodsName: "电2脑",
          price: 100100,
        },
        {
          id: "dew12",
          goodsName: "电23脑",
          price: 100200,
        },
      ],
      address: {
        city: "秦皇岛",
        street: "河北大街",
      },
    };
  },
};
</script>

<style>
</style>