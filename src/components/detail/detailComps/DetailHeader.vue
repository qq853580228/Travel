<template>
  <div class="detail-header">
    <div class="header-abs iconfont icon-fanhui"
         @click="handleAbs"
         v-show="isShowAbs"></div>
    <div class="header-fixed"
         :style="gitopacityStyle"
         v-show="!isShowAbs">
      <router-link to="/home">
        <span class="iconfont icon-fanhui"></span>
      </router-link>
      景点详情
    </div>
    <div class="slideDown"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShowAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleAbs () {
      this.$router.push({ path: '/home' })
    },
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.isShowAbs = false
      } else {
        this.isShowAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="scss">
.header-abs {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
}
.icon-fanhui {
  font-size: 0.32rem;
  color: #fff;
  text-align: center;
}
@import "~assets/css/varibles.scss";
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.86rem;
  line-height: 0.86rem;
  overflow: hidden;
  color: #fff;
  text-align: center;
  background-color: $bgColor;
  font-size: 0.32rem;
  .icon-fanhui {
    position: absolute;
    color: #fff;
    width: 0.64rem;
    left: 0;
    top: 0;
  }
}
.slideDown {
  height: 50rem;
}
</style>
