<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList"
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
  props: {
    swiperList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff !important;
}
.wrapper {
  touch-action: none;
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
