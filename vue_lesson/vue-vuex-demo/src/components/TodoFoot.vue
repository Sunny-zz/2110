<template>
  <div class="todo-foot">
    <span>{{activeNum}} item left</span>
    <button @click="change('all')" :class="{ active: type === 'all' }">all</button>
    <button @click="change('active')" :class="{ active: type === 'active' }">active</button>
    <button @click="change('completed')" :class="{ active: type === 'completed' }">completed</button>
  </div>
</template>

<script>
// 当获取 store 的state 的时候可以使用 mapState 辅助函数获取
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    // type() {
    //   return this.$store.state.type
    // }
    // ...mapState(["type"]),
    ...mapState({
      type: (state) => state.type.type
    }),
    // ...mapState({
    //   type: 'type'
    // })
    ...mapGetters(['activeNum'])
  },
  methods: {
    ...mapMutations(['changeType']),
    change(type) {
      // this.$store.commit('changeType', type)
      this.changeType(type)
    }
  },
};
</script>

<style>
.active {
  color: red;
}
</style>