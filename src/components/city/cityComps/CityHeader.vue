<template>
  <div class="city-header">
    <router-link to="/home">
      <span class="iconfont icon-fanhui"></span>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang="scss">
@import "~assets/css/varibles.scss";
.city-header {
  position: relative;
  height: 0.86rem;
  line-height: 0.86rem;
  overflow: hidden;
  color: #fff;
  text-align: center;
  background-color: $bgColor;
  font-size: 0.32rem;
  .icon-fanhui {
    position: absolute;
    color: #fff;
    width: 0.64rem;
    left: 0;
    top: 0;
  }
}
</style>
