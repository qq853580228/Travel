<template>
  <div>
    <ul class="list">
      <li class="item"
          v-for="item in letters"
          :key="item"
          :ref="item"
          @click="handleLetterClick"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd">{{item}}</li>
    </ul>
    <div class="toast"
         v-show="isShow"
         ref="toast"></div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      touchStatus: false,
      isShow: false,
      a: null,
      aOffsetTop: null,
      timer: null
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$bus.$emit('letterChange', e.target.innerText)
    },
    handleTouchStart (e) {
      this.touchStatus = true
      this.isShow = true
      if (this.touchStatus) {
        const a = this.$refs['A'][0]
        const aOffsetTop = a.offsetTop
        const currentOffsetTop = e.touches[0].clientY - 79
        const index = Math.floor((currentOffsetTop - aOffsetTop) / a.offsetHeight)
        if (index >= 0 && index < this.letters.length) {
          this.$refs.toast.setAttribute('data-before', this.letters[index])
        }
      }
    },
    handleTouchMove (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        if (this.touchStatus) {
          const currentOffsetTop = e.touches[0].clientY - 79
          const index = Math.floor((currentOffsetTop - this.aOffsetTop) / this.a.offsetHeight)
          if (index >= 0 && index < this.letters.length) {
            this.$bus.$emit('getMoveIndex', this.letters[index])
            this.$refs.toast.setAttribute('data-before', this.letters[index])
          }
        }
      }, 16)
    },
    handleTouchEnd () {
      this.touchStatus = false
      this.isShow = false
    }
  },
  computed: {
    letters () {
      let letters = []
      for (let k in this.cities) {
        letters.push(k)
      }
      return letters
    }
  },
  updated () {
    this.a = this.$refs['A'][0]
    this.aOffsetTop = this.a.offsetTop
  }
}
</script>

<style scoped lang="scss">
@import "~assets/css/varibles.scss";
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 0.4rem;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  .item {
    line-height: 0.4rem;
    color: $bgColor;
    text-align: center;
  }
}
.toast:before {
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: attr(data-before);
  width: 0.5rem;
  height: 0.5rem;
  background-color: green;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 0.5rem;
}
</style>
