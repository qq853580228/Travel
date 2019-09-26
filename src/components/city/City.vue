<template>
  <div class="city">
    <city-header />
    <city-search />
  </div>
</template>

<script>
import CityHeader from 'components/city/cityComps/CityHeader.vue'
import CitySearch from 'components/city/cityComps/CitySearch.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style scoped>
.city {
  touch-action: none;
}
</style>
