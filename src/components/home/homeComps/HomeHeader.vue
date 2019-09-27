<template>
  <div class="header">
    <div class="header-left"></div>
    <div class="header-input">
      <div class="input-search">
        <span class="iconfont icon-sousuo"></span>输入城市/景点/游玩主题
      </div>
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{$store.state.city}}<span class="iconfont icon-jiantouarrow486"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped >
@import "~assets/css/varibles.scss";
.header {
  display: flex;
  height: 0.86rem;
  line-height: 0.86rem;
  background-color: $bgColor;
  color: #ffffff;
  .header-left {
    width: 0.64rem;
    float: left;
    text-align: center;
  }
  .header-input {
    flex: 1;
    box-sizing: border-box;
    padding: 0.12rem 0.2rem;
    .input-search {
      height: 100%;
      border-radius: 0.1rem;
      background-color: #fff;
      line-height: 0.62rem;
      color: #ccc;
      padding-left: 0.2rem;
    }
  }
  .header-right {
    color: #fff;
    min-width: 1.04rem;
    padding: 0 0.1rem;
    float: right;
    text-align: center;
    .icon-jiantou {
      font-weight: normal;
    }
  }
}
</style>
