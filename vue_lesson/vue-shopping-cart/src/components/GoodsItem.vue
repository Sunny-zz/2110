<template>
  <div class="goods-item">
    <div class="radio">
      <input
        @change="$emit('updateGoods', id, { isSelected: !isSelected })"
        :checked="isSelected"
        type="checkbox"
        name=""
        id=""
      />
    </div>
    <div class="info">
      <img :src="img" alt="" />
      <p>{{ name }}</p>
    </div>
    <!-- 过滤器的使用 -->
    <!-- 过滤器一般只在 {{}} 模板语法中使用 不再 v-bind 中使用 -->
    <!-- {{ 参数 | 过滤器}} -->
    <!-- {{ 参数1 | 过滤器(参数2, 参数3 ...)}} -->
    <!-- {{ 参数 | 过滤器1 | 过滤器2}} -->
    <span class="price">¥{{ price | formatValue }}</span>
    <div class="count-wrap">
      <button :disabled="number === 1" @click="$emit('subNumber', id)">
        -
      </button>
      <input @blur="handleBlur" ref="input" @input="handleInput" :value="number" type="text" />
      <button @click="$emit('updateGoods', id, { number: number + 1, isSelected: true })">
        +
      </button>
    </div>

    <span class="total">¥{{ (number * price) | formatValue }}</span>
    <button class="del" @click="$emit('delGoods', id)" >删除</button>
  </div>
</template>

<script>
export default {
  props: ["id", "price", "name", "img", "number", "isSelected"],
  // 创建 组件过滤器
  // filters: {
  //   // 格式化价格
  //   formatValue: function (value) {
  //     return value.toFixed(2);
  //   },
  // },
  methods: {
    handleInput(e) {
      // 当用户输入了 非数字 的时候处理
      const re = /[^\d]/;
      const key = e.data;
      if (re.test(key)) {
        this.$refs.input.value = this.$refs.input.value.replace(key, "");
      }
    },
    handleBlur() {
      this.$emit('updateGoods', this.id, {number: this.$refs.input.value * 1, isSelected: true})
    }
  },
};
</script>

<style>
.goods-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
.info {
  flex-grow: 1;
  display: flex;
}
.radio,
.count-wrap,
.price,
.total,
.del {
  width: 100px;
}
.radio {
  margin: 0;
}
.count-wrap input {
  width: 30px;
}

/* chrome */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
/* 火狐浏览器 */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>