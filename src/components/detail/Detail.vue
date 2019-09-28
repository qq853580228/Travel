<template>
  <div class="detail">
    <detail-banner :sight-name="sightName"
                   :banner-img="bannerImg"
                   :gallary-imgs="gallaryImgs"
                   :category-list="categoryList" />
    <detail-header />
    <detail-list :lists="categoryList" />
    <div class="slide"></div>
  </div>
</template>

<script>
import DetailBanner from 'components/detail/detailComps/DetailBanner.vue'
import DetailHeader from 'components/detail/detailComps/DetailHeader.vue'
import DetailList from 'components/detail/detailComps/DetailList.vue'

import { getDetailInfo } from 'network/detail.js'
export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  created () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      getDetailInfo(this.$route.params.id)
        .then(res => {
          res = res.data
          if (res.ret && res.data) {
            let data = res.data
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.categoryList = data.categoryList
          }
        })
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style scoped>
.slide {
  height: 50rem;
}
</style>
