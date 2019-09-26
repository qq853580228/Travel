<template>
  <div class="city-search">
    <input class="search-input"
           type="text"
           placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>
