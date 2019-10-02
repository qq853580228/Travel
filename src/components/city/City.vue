<template>
  <div class="city">
    <city-header />
    <city-search :cities="cities"
                 @inputFocus="inputFocus"
                 @inputBlur="inputBlur" />
    <city-list :cities="cities"
               :hot-cities="hotCities" />
    <city-alphabet :cities="cities"
                   v-show="isShowAlphabet" />
  </div>
</template>

<script>
import CityHeader from 'components/city/cityComps/CityHeader.vue'
import CitySearch from 'components/city/cityComps/CitySearch.vue'
import CityList from 'components/city/cityComps/CityList.vue'
import CityAlphabet from 'components/city/cityComps/CityAlphabet.vue'

import { getCityData } from 'network/city.js'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      isShowAlphabet: true
    }
  },
  created () {
    this.getCityData()
  },
  methods: {
    getCityData () {
      getCityData()
        .then(res => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.cities = data.cities
            this.hotCities = data.hotCities
          }
        })
    },
    inputFocus () {
      this.isShowAlphabet = false
    },
    inputBlur () {
      this.isShowAlphabet = true
    }
  }
}
</script>

<style scoped>
.city {
  touch-action: none;
}
</style>
