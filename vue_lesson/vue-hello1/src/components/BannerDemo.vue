<template>
  <div class="banner-wrap">
    <h3>轮播图</h3>
    <div class="banner">
      <div class="wrap">
        <img
          :class="['pic', { active: ind === 0 }]"
          src="https://img12.360buyimg.com/pop/s590x470_jfs/t1/72537/3/17952/93301/62789256Ecb9319d9/da1ec0468e98ff1e.jpg.webp"
          alt=""
        />
        <img
          :class="['pic', { active: ind === 1 }]"
          src="https://imgcps.jd.com/ling4/10038555430609/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa64/328b96c2/cr/s/q.jpg"
          alt=""
        />
        <img
          :class="['pic', { active: ind === 2 }]"
          src="https://img14.360buyimg.com/pop/s590x470_jfs/t1/107362/20/24177/90602/6233decdE5627d944/b7194e538e3c8c7a.jpg.webp"
          alt=""
        />
        <img
          :class="['pic', { active: ind === 3 }]"
          src="https://img14.360buyimg.com/pop/s590x470_jfs/t1/78972/25/17942/90179/626b7485Ef4dda81b/9b524faaf09164a2.jpg.webp"
          alt=""
        />
        <img
          :class="['pic', { active: ind === 4 }]"
          src="https://img12.360buyimg.com/pop/s590x470_jfs/t1/218473/3/13688/94436/621f673eE21fc08b2/816e03191fc52642.jpg.webp"
          alt=""
        />
      </div>
      <ul class="pagination">
        <li
          @mouseenter="handleMouseenter(0)"
          :class="{ active: ind === 0 }"
        ></li>
        <li
          @mouseenter="handleMouseenter(1)"
          :class="{ active: ind === 1 }"
        ></li>
        <li
          @mouseenter="handleMouseenter(2)"
          :class="{ active: ind === 2 }"
        ></li>
        <li
          @mouseenter="handleMouseenter(3)"
          :class="{ active: ind === 3 }"
        ></li>
        <li
          @mouseenter="handleMouseenter(4)"
          :class="{ active: ind === 4 }"
        ></li>
      </ul>
      <div @click="prev" class="prev">＜</div>
      <div @click="next" class="next">＞</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    ind: 0,
  }),
  methods: {
    // metods 内的函数可以当做事件函数
    // vue tempalte 中的事件绑定
    // 1. @事件名='函数名'  这个函数就是事件函数
    // 2. @事件名='函数()' 这个函数就不是事件函数了，就是普通函数，需要用事件对象的需要传递参数, vue 中的事件对象使用 $event 表示
    handleMouseenter(num) {
      // 修改 ind
      this.ind = num;
    },
    prev() {
      this.ind -- 
      if(this.ind < 0) {
        this.ind = 4
      }
    },
    next() {
      this.ind ++ 
      if(this.ind > 4) {
        this.ind = 0
      }
    },
  },
};
</script>

<style>
.banner {
  width: 590px;
  height: 470px;
  position: relative;
  margin: 0;
}
.banner .wrap {
  width: 100%;
  height: 100%;
}
.banner .wrap > .pic {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 0;
  cursor: pointer;
  transition: all 0.5s linear;
}
.banner .wrap > .pic.active {
  opacity: 1;
  z-index: 1;
}
.banner .pagination {
  list-style: none;
  padding-left: 0;
  position: absolute;
  bottom: 20px;
  left: 30px;
  z-index: 2;
}
.banner .pagination li {
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  margin-right: 4px;
  cursor: default;
}
.banner .pagination li.active {
  background-color: rgba(33, 120, 227, 0.6);
}
.banner .prev,
.banner .next {
  width: 50px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-size: 26px;
  position: absolute;
  z-index: 2;
  top: 50%;
  margin-top: -40px;
  cursor: pointer;
  user-select: none;
}
.banner .prev {
  left: 0;
}
.banner .next {
  right: 0;
}
.banner .prev:hover,
.banner .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>