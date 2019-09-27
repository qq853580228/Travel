<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    // 创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
      })
    }
  },
  methods: {
    scrollToElement (ele) {
      this.scroll.scrollToElement(ele)
    }
  }
}
</script>

<style scoped>
</style>
