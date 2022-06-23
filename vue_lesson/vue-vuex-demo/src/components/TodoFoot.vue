<template>
  <div class="todo-foot">
    <span>{{ activeNum }} item left</span>
    <button @click="change('all')" :class="{ active: type === 'all' }">
      all
    </button>
    <button @click="change('active')" :class="{ active: type === 'active' }">
      active
    </button>
    <button
      @click="change('completed')"
      :class="{ active: type === 'completed' }"
    >
      completed
    </button>
  </div>
</template>

<script>
// 当获取 store 的state 的时候可以使用 mapState 辅助函数获取
import { mapGetters, createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("type");
export default {
  computed: {
    // type() {
    //   return this.$store.state.type
    // }
    // ...mapState(["type"]),
    // 当 vuex 拆分模块的时候 获取 state 时默认是需要多一层获取， 可以写成下面写法， 第一个参数就是模块名
    ...mapState(["type"]),
    // ...mapState({
    //   type: 'type'
    // })
    ...mapGetters(["activeNum"]),
  },
  methods: {
    // 因为 changeType 是命名空间模块下的 mutation 获取的时候 需要添加 命名空间的名字
    ...mapMutations( ["changeType"]),
    change(type) {
      // this.$store.commit('changeType', type)
      this.changeType(type);
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>