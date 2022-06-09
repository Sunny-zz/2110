<template>
  <div class="shopping-cart">
    <div class="cart-header">
      <div>
        <input type="checkbox" name="" id="all1" />
        <label for="all1">全选</label>
      </div>
      <span class="info">商品</span>
      <span>单价</span>
      <span>数量</span>
      <span>小计</span>
      <span>操作</span>
    </div>
    <div class="cart-list">
      <GoodsItem
        v-for="goods in cartList"
        :key="goods.id"
        v-bind="goods"
        @addNumber="addNumber"
        @subNumber="subNumber"
        @changeGoodsSelected="changeGoodsSelected"
        @updateGoods="updateGoods"
      />
    </div>
    <div class="cart-footer">
      <div class="footer-left">
        <div>
          <input type="checkbox" name="" id="all2" />
          <label for="all2">全选</label>
        </div>
        <button>删除选中商品</button>
      </div>
      <div>
        <span>已选择 <span></span> 件商品 </span>
        <span
          >总价: <span>¥{{ 100 | formatValue }}</span>
        </span>
        <button>去结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";
export default {
  components: { GoodsItem },
  data() {
    return {
      cartList: [
        {
          id: "001",
          price: 47,
          name: "线控带麦-白色",
          img: "https://img10.360buyimg.com/n0/s80x80_jfs/t1/197176/35/3740/61142/611cbdedEa1bc3c97/d66f88750469d471.jpg.dpg",
          number: 1,
          isSelected: false,
        },
        {
          id: "002",
          price: 89.9,
          name: "时尚金属升级版 香槟银 (USB3.1)",
          img: "https://img20.360buyimg.com/n0/s80x80_jfs/t1/183185/18/15403/63023/60fa3adaEf5344840/db3eb9c56a8c53d0.jpg.dpg",
          number: 1,
          isSelected: false,
        },
      ],
    };
  },

  methods: {
    getGoodsByid(id) {
      return this.cartList.find((item) => item.id === id);
    },
    // 点击 + 当前点击的商品数量加1
    addNumber(id) {
      this.getGoodsByid(id).number++;
    },
    // 点击 - 当前点击的商品数量减1
    subNumber(id) {
      this.getGoodsByid(id).number--;
    },
    changeGoodsSelected(id) {
      this.getGoodsByid(id).isSelected = !this.getGoodsByid(id).isSelected;
    },
    // 上面的加减和修改checked其实都相当于更新的 商品数据
    updateGoods(id, newGoods) {
      // newGoods 是更新的部分对象
      // 比如更新 number newGoods 可以写成  {number: 新的number}
      let currentGoods = this.getGoodsByid(id);
      Object.assign(currentGoods, newGoods)
    },
  },
};
</script>

<style>
.shopping-cart {
  width: 890px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 400px;
}
.shopping-cart .cart-list {
  flex-grow: 1;
}
.shopping-cart .cart-header,
.shopping-cart .cart-footer {
  display: flex;
  justify-content: space-between;
}
.shopping-cart .cart-header > div,
.shopping-cart .cart-header > span {
  width: 100px;
  display: flex;
}
.shopping-cart .cart-header .info {
  flex-grow: 1;
}
.shopping-cart .cart-footer .footer-left {
  display: flex;
}
</style>