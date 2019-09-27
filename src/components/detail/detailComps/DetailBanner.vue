<template>
  <div>
    <div class="banner"
         @click="handleBannerClick">
      <img class="banner-img"
           src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
           alt="">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont icon-xiangce"></span>12</div>
      </div>
    </div>
    <gallary v-show="isShouGallary"
             @closeGallary="closeGallary" />
  </div>
</template>

<script>
import Gallary from 'components/common/gallary/Gallary.vue'
export default {
  name: 'DetailBanner',
  components: {
    Gallary
  },
  data () {
    return {
      isShouGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.isShouGallary = true
    },
    closeGallary () {
      this.isShouGallary = false
    }
  }
}
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      flex: 1;
      line-height: 0.6rem;
      font-size: 0.32rem;
      padding-left: 0.2rem;
    }
    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      left: 0.32rem;
      font-size: 0.24rem;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      margin-top: 0.14rem;
      .icon-xiangce {
        font-size: 0.24rem;
        margin-right: 0.06rem;
      }
    }
  }
}
</style>
