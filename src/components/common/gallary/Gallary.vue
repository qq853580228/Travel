<template>
  <div class="gallary"
       @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img class="item-img"
               src="http://img1.qunarzz.com/sight/p0/1901/d2/d20386fec7943deba3.img.jpg_r_800x800_8aea5d0c.jpg"
               alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="item-img"
               src="http://img1.qunarzz.com/sight/p0/1901/7f/7f146f621ed9a8f6a3.img.jpg_r_800x800_80ca2a23.jpg"
               alt="">
        </swiper-slide>
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observerParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('closeGallary')
    }
  }
}
</script>

<style scoped lang="scss">
.gallary >>> .swiper-container {
  overflow: inherit;
}
.gallary {
  touch-action: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .item-img {
      width: 100%;
    }
    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
