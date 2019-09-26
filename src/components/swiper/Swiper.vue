<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperSlides"
                    :key="item.id"><img class="swiper-img"
             :src="item.imgUrl"
             alt=""></swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      swiperSlides: [{
        id: '001',
        imgUrl: 'https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png'
      },
      {
        id: '002',
        imgUrl: 'https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png'
      }]
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff !important;
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  overflow: hidden;
  .swiper-img {
    width: 100%;
    background-color: #ccc;
  }
}
</style>
