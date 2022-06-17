<template>
  <div>
    <h3>混入</h3>
    <!-- <p>{{num}} {{q}}</p> -->
    <hr>
    <h3>插件</h3>
    <PluginDemo />
    <hr>
    <h3>渲染函数和 jsx</h3>
    <RenderFunction />
  </div>
</template>

<script>
import PluginDemo from '../components/PluginDemo.vue';
import RenderFunction from '../components/RenderFunction.vue';
// import {myMixinOne, myMixinTwo} from '../js/mixin'
export default {
  components: { PluginDemo, RenderFunction },
  // mixins: [myMixinOne, myMixinTwo],
  data() {
    return {
      num: 1000
    }
  },
  created () {
    // console.log('我是组件的生命周期');
  },
}
</script>

<style>

</style>