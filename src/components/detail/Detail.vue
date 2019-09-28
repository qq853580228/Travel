<template>
  <div class="detail">
    <detail-banner />
    <detail-header />
    <detail-list :lists="lists" />
    <div class="slide"></div>
  </div>
</template>

<script>
import DetailBanner from 'components/detail/detailComps/DetailBanner.vue'
import DetailHeader from 'components/detail/detailComps/DetailHeader.vue'
import DetailList from 'components/detail/detailComps/DetailList.vue'
export default {
  name: 'Detail',
  data () {
    return {
      lists: [
        {
          title: '成人票',
          children: [{
            title: '成人三馆联票',
            children: [
              {
                title: '成人三馆联票 - 厦门连锁店'
              }
            ]
          },
          {
            title: '成人五馆联票'
          }
          ]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        }]
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
