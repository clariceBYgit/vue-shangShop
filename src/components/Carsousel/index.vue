<template>
          <!--banner轮播-->
        <div class="swiper-container" ref="cur" id="mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
              <img :src="carousel.imgUrl" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
</template>

<script>
import Swiper from "swiper";

export default {
    name:'Carsousel',
    props:['list'],
      // 通过 watch + $nextTick 完成首页轮播图
  watch: {
    list: {
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.cur, {
            autoplay: true, //自动滑动
            // // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //点击小球的时候也切换图片
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
}
</script>

<style>

</style>