<template>
  <div>
    <h2>about 页</h2>
    <!-- <button @click="$router.back()">返回</button> -->
    <!-- <button @click="$router.go(1)">前进</button> -->
    <!-- <button @click="$router.replace('/')">替换到首页</button> -->
    <h3>过渡和动画</h3>
    <!-- 需要使用 vue 提供的内置的全局组件 transition -->
    <div>
      <h4>单元素/组件的过渡</h4>
      <button @click="showText = !showText">按钮</button>
      <!-- 切换的效果 需要给 transition 组件传递 name 属性 -->
      <!-- 需要根据 name 的值，书写对应的 class 达到切换效果 -->
      <!-- 需要书写 class 有一下六种 -->
      <!-- name-enter 出现开始 -->
      <!-- name-enter-active 出现正在执行 -->
      <!-- name-enter-to 出现结束   默认和元素出现的样式一致 一般不需要设置 -->
      <!-- name-leave 离开开始 默认和元素出现的样式一致 一般不需要设置 -->
      <!-- name-leave-active 离开正在执行 -->
      <!-- name-leave-to 离开的结束  -->
      <transition
        name="fade"
        appear
        appear-active-class="x-active"
        appear-class="x"
      >
        <p class="text" v-if="showText">我是一个文字</p>
        <!-- <BaseButton v-if="showText" text="按钮" /> -->
      </transition>
    </div>
    <hr />
    <div>
      <h4>多个元素</h4>
      <button @click="isSave = !isSave">切换编辑或者保存</button>
      <br />
      <!-- 过渡模式 -->
      <transition name="fade" mode="out-in">
        <!-- 需要给每个元素添加不同给的 key 属性 -->
        <button key="save" v-if="isSave">保存</button>
        <button key="edit" v-else>编辑</button>
      </transition>
    </div>
    <hr />
    <div>
      <h4>列表过渡</h4>
      <!-- 需要使用  transition-group 组件实现 -->
      <button @click="remove">remove</button>
      <button @click="add">add</button>
      <button @click="shuffle">随机打乱</button>
      <div>
        <!-- 添加删除过渡 -->
        <!-- <transition-group name="slide">
          <span style="margin-right: 5px; display: inline-block;" v-for="num in numArr" :key="num">{{
            num
          }}</span>
        </transition-group> -->
        <!-- 排序过渡 -->
        <transition-group move-class="flip">
          <span style="margin-right: 5px; display: inline-block;" v-for="num in numArr" :key="num">{{
            num
          }}</span>
        </transition-group> 
      </div>
    </div>
  </div>
</template>

<script>
// import BaseButton from '../../components/BaseButton.vue';
export default {
  // components: { BaseButton },
  // 编程式导航    不借助 router-link 实现路由跳转
  // $router
  // push   back   go  replace  forward
  // push(地址)  跳转
  // 历史记录跳转
  // back() 返回上一页
  // go(num)  num -1 上一页    num 1 下一页
  // forward() 返回下一页
  // replace(地址) 将当前地址替换成新的地址，当前地址不会有历史记录
  data() {
    return {
      showText: true,
      isSave: true,
      numArr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    };
  },
  computed: {
    randomNum() {
      return  Math.floor(Math.random() * this.numArr.length)
    }
  },
  methods: {
    remove() {
      // 随机删除 
      this.numArr.splice(this.randomNum, 1)
    },
    add(){
      // 随机添加
      this.numArr.splice(this.randomNum, 0, this.nextNum)
      this.nextNum ++
    },
    shuffle(){
      const copyNumArr = [...this.numArr]
      const len = copyNumArr.length
      const newNumArr = []

      for (let i = 0; i < len; i++) {
        const randomNum = Math.floor(Math.random() * copyNumArr.length)
        newNumArr.push(copyNumArr.splice(randomNum, 1)[0])
      }

      this.numArr = newNumArr
    }
  },
};
</script>

<style>
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  33% {
    transform: scale(1.5);
  }
  66% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(0.5);
  }
  66% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

.text {
  width: 200px;
  text-align: center;
  margin-left: 200px;
}
/* .fade-enter{
  opacity: 0;
  transform: translateX(-100px);
} */
.fade-enter-active {
  /* transition: all 2s; */
  animation: bounce-in 1s linear;
}
.fade-leave-active {
  animation: bounce-in 1s reverse;
}
/* .fade-leave-to{
  transform: translateX(100px);
  opacity: 0;
} */

.x {
  transform: translateX(-100px);
  opacity: 0;
}
.x-active {
  transition: all 1s;
}

.slide-enter{
  opacity: 0;
  transform: translateY(-50px);
}
.slide-enter-active , .slide-leave-active{
  transition: all .5s;
}
.slide-leave-to{
  opacity: 0;
  transform: translateY(50px);
}

/* transition-group 内的元素移动的时候 */
.flip {
  transition: all 1s;
}
</style>