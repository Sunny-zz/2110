<template>
  <!-- 对话框组件 -->
  <div v-show="visibility" @click.self="$emit('close')" class="dialog-mask">
    <div class="dialog-demo">
      <div class="dialog-header">
        <h4>Create</h4>
        <span @click="$emit('close')">x</span>
      </div>
      <div class="dialog-content">
        <div class="time">
          <label for="time">时间</label>
          <input type="datetime" name="" id="time" />
        </div>
        <br />
        <br />
        <div class="title">
          <label for="title">标题</label>
          <input type="text" name="" id="title" />
        </div>
        <br />
        <br />
        <div class="author">
          <label for="author">作者</label>
          <input type="text" name="" id="author" />
        </div>
        <br />
        <br />
        <div class="importance">
          <label for="title">重要性</label>
          <div>
            <span
              @mouseleave="rateActiveIndex = 0"
              @mouseenter="rateActiveIndex = i"
              v-for="i in 3"
              :key="i"
              :class="[
                'iconfont',
                3 >= i || rateActiveIndex >= i ? 'icon-xingxing' : 'icon-star', {'allselect':3===3 || rateActiveIndex === 3 }
              ]"
            ></span>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div class="dialog-footer">
        <button @click="cancel">取消</button>
        <button @click="ok">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["visibility"],
  data() {
    return {
      rateActiveIndex: 0,
    };
  },
  methods: {
    cancel() {
      this.$emit("close");
    },
    ok() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.dialog-mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.dialog-demo {
  width: 600px;
  margin: 0 auto;
  background-color: #fff;
}
.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
}
.allselect {
  color: rgb(240, 230, 44);
}
</style>