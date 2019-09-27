<template>
  <scroll class="wrapper"
          ref="scroll">
    <div class="city-list">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="btn"
                 @click="currentCityClick($store.state.city)">{{$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item in hotCities"
               :key="item.id"
               @click="handleCityClick(item.name)">
            <div class="
               btn">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(val, key) in cities"
           :key="key"
           :ref="key">
        <div class="
         title
         border-topbottom">{{key}}</div>
        <div class="city-item">
          <div class="item border-bottom"
               v-for="item in val"
               :key="item.id"
               @click="handleCitiesClick(item.name)">{{item.name}}</div>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/scroll/Scroll.vue'
export default {
  name: 'CityList',
  props: {
    cities: {
      type: Object,
      default: function () {
        return {}
      }
    },
    hotCities: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      letter: null
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('cityChange', city)
      this.$store.commit('cityChange', city)
      this.$router.push('/home')
    },
    handleCitiesClick (city) {
      this.$store.commit('cityChange', city)
      this.$router.push('/home')
    },
    currentCityClick (city) {
      this.$store.commit('cityChange', city)
      this.$router.push('/home')
    }
  },
  components: {
    Scroll
  },
  mounted () {
    this.$bus.$on('letterChange', data => {
      this.letter = data
    })
    this.$bus.$on('getMoveIndex', letter => {
      const ele = this.$refs[letter]
      this.$refs.scroll.scrollToElement(ele[0])
    })
    // this.$bus.$on('itemClick', val => {
    //   this.$refs.btn.innerText = val
    // })
  },
  watch: {
    letter () {
      if (this.letter) {
        const ele = this.$refs[this.letter]
        this.$refs.scroll.scrollToElement(ele[0])
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .title {
    line-height: 0.54rem;
    background-color: #eee;
    color: #666;
    padding-left: 0.2rem;
    font-size: 0.26rem;
  }
  .border-bottom {
    &:before {
      border-color: #ccc;
    }
    &:after {
      border-color: #ccc;
    }
  }
  .border-topbottom {
    &:before {
      border-color: #ccc;
    }
  }
  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;
    .button-wrapper {
      float: left;
      width: 33.33%;
      .btn {
        padding: 0.1rem 0;
        background-color: #fff;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
        margin: 0.1rem;
        text-align: center;
      }
    }
  }
  .city-item {
    .item {
      line-height: 0.72rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
