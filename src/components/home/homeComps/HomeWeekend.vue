<template>
  <div class="home-weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="weekend-item"
          v-for="item in weekendsList"
          :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img"
               :src="item.imgUrl"
               alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendsList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          desc: '在帝都过周末，不仅仅是城中游！'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          desc: '在帝都过周末，不仅仅是城中游！'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          desc: '在帝都过周末，不仅仅是城中游！'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/css/mixins.scss";

.weekend-title {
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 1em;
}
.weekend-item {
  border-bottom: 0.05rem solid rgba(0, 0, 0, 0.1);

  .item-img-wrapper {
    height: 0;
    overflow: hidden;
    padding-bottom: 33.9%;
  }
  .item-img {
    width: 100%;
  }
  .item-info {
    padding: 0.14rem 0.2rem 0.2rem 0.2rem;
    min-width: 0;
    .item-title {
      font-size: 0.28rem;
      line-height: 0.54rem;
      font-size: 0.32rem;
      @include ellipsis;
      padding-right: 1.4rem;
    }
    .item-desc {
      font-size: 0.24rem;
      line-height: 0.4rem;
      color: #ccc;
      @include ellipsis;
      padding-right: 1.4rem;
    }
  }
}
</style>
