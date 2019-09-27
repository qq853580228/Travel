<template>
  <div class="home">
    <home-header />
    <scroll class="wrapper">
      <swiper :swiper-list="swiperList"
              class="swiper" />
      <home-icons :icon-list="iconList"
                  class="icons" />
      <home-recommend :recommend-list="recommendList" />
      <home-weekend :weekend-list="weekendList" />
    </scroll>
  </div>
</template>

<script>
import Swiper from 'components/swiper/Swiper.vue'

import HomeHeader from 'components/home/homeComps/HomeHeader.vue'
import HomeIcons from 'components/home/homeComps/HomeIcons.vue'
import HomeRecommend from 'components/home/homeComps/HomeRecommend.vue'
import HomeWeekend from 'components/home/homeComps/HomeWeekend.vue'

import { getHomeInfo } from 'network/home.js'

import Scroll from 'components/scroll/Scroll.vue'

export default {
  name: 'Home',
  data () {
    return {
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  components: {
    HomeHeader,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    Swiper,
    Scroll
  },
  methods: {
    getHomeInfo () {
      getHomeInfo(this.$store.state.city)
        .then(res => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.swiperList = data.swiperList
            this.weekendList = data.weekendList
          }
        })
    }
  },
  created () {
    this.getHomeInfo()
    this.lastCity = this.$store.state.city
  },
  activated () {
    if (this.lastCity !== this.$store.state.city) {
      this.lastCity = this.$store.state.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  touch-action: none;
  .wrapper {
    position: absolute;
    top: 0.43rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: -1;
  }
  .swiper {
    position: relative;
  }
  .icons {
    padding-top: 0.5rem;
  }
}
</style>
