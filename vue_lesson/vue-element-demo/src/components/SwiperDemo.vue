<template>
  <div v-if="banner.length" class="swiper-demo">
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in banner" :key="item.id">
        <img :src="item.imgSrc" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
import axios from "axios";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      banner: [],
      swiperOptions: {
        allowTouchMove: false,
        pagination: {
          el: ".swiper-pagination",
          clickable :true,
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        effect: 'fade',
        loop: true,
        autoplay: {
          disableOnInteraction: false,
        }
      },
    };
  },
  async created() {
    const res = await axios.get("http://localhost:3008/banner");
    this.banner = res.data;
  },
};
</script>

<style>
.swiper {
  width: 590px;
  height: 470px;
}
</style>