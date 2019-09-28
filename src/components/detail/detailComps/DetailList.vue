<template>
  <div class="detail-list">
    <div class="list-item"
         v-for="item in lists"
         :key="item.title">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children"
           class="item-children">
        <detail-list :lists="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    lists: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
.item-title {
  font-size: 0.32rem;
  line-height: 0.8rem;
  padding-left: 0.2rem;
  .item-title-icon {
    position: relative;
    display: inline-block;
    top: 0.06rem;
    left: 0.06rem;
    width: 0.36rem;
    height: 0.36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem
      no-repeat;
    margin-right: 0.1rem;
    background-size: 0.4rem 3rem;
  }
}
.item-children {
  padding-left: 0.1rem;
}
</style>
