<template>
  <div class="city">
    <city-header />
    <city-search />
    <city-list />
    <city-alphabet />
  </div>
</template>

<script>
import CityHeader from 'components/city/cityComps/CityHeader.vue'
import CitySearch from 'components/city/cityComps/CitySearch.vue'
import CityList from 'components/city/cityComps/CityList.vue'
import CityAlphabet from 'components/city/cityComps/CityAlphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style scoped>
.city {
  touch-action: none;
}
</style>
