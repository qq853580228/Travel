<template>
  <div class="home-icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages"
                    :key="index">
        <div class="icon"
             v-for="item of page"
             :key="item.id">
          <div class="icon-img">
            <img class='icon-img-content'
                 :src="item.imgUrl"
                 alt="">
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {

      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/css/varibles.scss";
@import "~assets/css/mixins.scss";
.home-icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
  touch-action: none;
}
.home-icons {
  padding-top: 0.1rem;
  touch-action: none;
  .icon {
    position: relative;
    float: left;
    width: 25%;
    padding-bottom: 25%;
    overflow: hidden;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $darkTextColor;
      text-align: center;
      @include ellipsis;
    }
  }
}
</style>
