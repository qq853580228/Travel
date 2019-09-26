<template>
  <div>
    <home-header />
    <swiper :swiper-list="swiperList" />
    <home-icons :icon-list="iconList" />
    <home-recommend :recommend-list="recommendList" />
    <home-weekend :weekend-list="weekendList" />
  </div>
</template>

<script>
import Swiper from 'components/swiper/Swiper.vue'

import HomeHeader from 'components/home/homeComps/HomeHeader.vue'
import HomeIcons from 'components/home/homeComps/HomeIcons.vue'
import HomeRecommend from 'components/home/homeComps/HomeRecommend.vue'
import HomeWeekend from 'components/home/homeComps/HomeWeekend.vue'

import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    Swiper
  },
  methods: {
    getHomeInfo () {
      axios({
        url: '/api/index.json'
      })
        .then(res => {
          this.iconList = res.data.data.iconList
          this.recommendList = res.data.data.recommendList
          this.swiperList = res.data.data.swiperList
          this.weekendList = res.data.data.weekendList
        })
    }
  },
  created () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>
</style>
