<template>
  <div>
    <h3>事件处理</h3>
    <div>
      <button>{{count}}</button>
      <button @click="count ++">+</button>
      <button @click="fun(1100,$event)">修改成任意的值</button>
      <button @click="add">+</button>
      <hr>
      <div @click.self="handleTest1" class="test1">
        <div @click.once="handleTest2" class="test2">
          <div @click.stop="handleTest3" class="test3"></div>
        </div>
      </div>
      <a @click.prevent="" href="http://www.baidu.com">去百度</a>
      <div @scroll="handleScroll" class="demo1">
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
        <div>121312312</div>
      </div>
      <input @keydown.enter="onKeyDown" type="text">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0
  }),
  methods: {
    fun(num, e){
      this.count  = num
      console.log(e)
    },
    add(e){
      this.count ++
      console.log(e)
    },
    handleTest1 (){
      console.log('我是大盒子 test1')
    },
    handleTest2 (){
      console.log('我是中盒子 test2')
    },
    handleTest3 (){
      console.log('我是小盒子 test3')
    },
    handleScroll(){
      console.log('滚动事件触发了')
    },
    onKeyDown (){
      console.log(11111)
    }
  }
}
</script>

<style>
.test1 {
  width: 400px;
  height: 400px;
  background-color: #ccc;
}
.test2{
  width: 200px;
  height: 200px;
  background-color: #000;
}
.test3 {
  width: 100px;
  height: 100px;
  background-color: #00b3d4;
}
.demo1 {
  width: 100px;
  height: 300px;
  overflow-y: scroll;
}
.demo1 > div {
  line-height: 30px;
  border-bottom: 1px solid #ccc;
}
</style>