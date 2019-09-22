<template>
  <div>
    <home-header />
    <swiper />
  </div>
</template>

<script>
import Swiper from 'components/swiper/Swiper.vue'

import HomeHeader from 'components/home/homeComps/HomeHeader.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper
  }
}
</script>

<style scoped>
</style>
