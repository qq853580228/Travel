<template>
  <div>
    <home-header />
    <swiper />
    <home-icons />
    <home-recommend />
    <home-weekend />
  </div>
</template>

<script>
import Swiper from 'components/swiper/Swiper.vue'

import HomeHeader from 'components/home/homeComps/HomeHeader.vue'
import HomeIcons from 'components/home/homeComps/HomeIcons.vue'
import HomeRecommend from 'components/home/homeComps/HomeRecommend.vue'
import HomeWeekend from 'components/home/homeComps/HomeWeekend.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    Swiper
  }
}
</script>

<style scoped>
</style>
