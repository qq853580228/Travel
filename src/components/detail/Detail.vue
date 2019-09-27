<template>
  <div class="detail">
    <detail-banner />
    <detail-header />
  </div>
</template>

<script>
import DetailBanner from 'components/detail/detailComps/DetailBanner.vue'
import DetailHeader from 'components/detail/detailComps/DetailHeader.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style scoped>
</style>
