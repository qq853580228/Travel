<template>
  <div class="home-recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="recommend-item  border-bottom"
          v-for="item in recommendsList"
          :key="item.id">
        <img class="item-img"
             :src="item.imgUrl"
             alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendsList: [
        {
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg',
          title: '奥林匹克塔',
          desc: '【通知】奥林匹克塔9月29日、30日、 10月1 日和2 日有接待活动，全天闭塔（日场、夜场均不接待），给您带来的不便敬请谅解！'
        },
        {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg',
          title: '奥林匹克塔',
          desc: '【通知】奥林匹克塔9月29日、30日、 10月1 日和2 日有接待活动，全天闭塔（日场、夜场均不接待），给您带来的不便敬请谅解！'
        },
        {
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg',
          title: '奥林匹克塔',
          desc: '【通知】奥林匹克塔9月29日、30日、 10月1 日和2 日有接待活动，全天闭塔（日场、夜场均不接待），给您带来的不便敬请谅解！'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/css/mixins.scss";
.recommend-title {
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 1em;
}
.recommend-item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      @include ellipsis;
    }
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      @include ellipsis;
    }
    .item-btn {
      background-color: #ff9300;
      color: #fff;
      padding: 0.1rem;
      line-height: 0.34rem;
      margin-top: 0.16rem;
      border-radius: 0.06rem;
    }
  }
}
</style>
