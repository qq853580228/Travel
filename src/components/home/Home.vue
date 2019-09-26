<template>
  <div>
    <home-header />
    <swiper />
    <home-icons/>
  </div>
</template>

<script>
import Swiper from 'components/swiper/Swiper.vue'

import HomeHeader from 'components/home/homeComps/HomeHeader.vue'
import HomeIcons from 'components/home/homeComps/HomeIcons.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeIcons,
    Swiper
  }
}
</script>

<style scoped>
</style>
