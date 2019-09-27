<template>
  <div>
    <div class="city-search">
      <input class="search-input"
             type="text"
             placeholder="输入城市名或拼音"
             v-model.trim="keyword"
             @input="keywordChange">
    </div>
    <scroll class="wrapper"
            v-show="keyword">
      <div class="search-content">
        <ul>
          <li class="item border-topbottom"
              v-for="item in lists"
              :key="item.id"
              ref="item">{{item.name}}</li>
          <li class="item border-topbottom"
              v-show="hasData">没有找到相关信息</li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/scroll/Scroll.vue'
export default {
  name: 'CitySearch',
  props: {
    cities: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  components: {
    Scroll
  },
  data () {
    return {
      keyword: '',
      lists: [],
      timer: null
    }
  },
  methods: {
    keywordChange () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.lists = []
        return
      }
      this.timer = setTimeout(() => {
        let result = []
        for (let k in this.cities) {
          this.cities[k].forEach(item => {
            if (item.spell.indexOf(this.keyword.toLocaleLowerCase()) !== -1 || item.name.indexOf(this.keyword) !== -1) {
              result.push(item)
            }
          })
        }
        if (!this.keyword) {
          this.lists = []
        }
        this.lists = result
      }, 100)
    }
    // itemClick (val) {
    //   this.$bus.$emit('itemClick', val)
    //   this.isShow = false
    //   this.keyword = ''
    //   this.$refs.item.innerText = ''
    // }
  },
  computed: {
    hasData () {
      return !this.lists.length
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/css/varibles.scss";
.city-search {
  height: 0.72rem;
  background-color: $bgColor;
  padding: 0 0.1rem;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    border-radius: 0.06rem;
    text-align: center;
    color: #666;
    padding: 0 0.1rem;
  }
}
.wrapper {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #eee;
  z-index: 1;
  .item {
    line-height: 0.64rem;
    background-color: #fff;
  }
}
</style>
