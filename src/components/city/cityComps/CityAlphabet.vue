<template>
  <div class="list">
    <ul>
      <li class="item"
          v-for="(val, key) in cities"
          :key="key">{{key}}</li>
    </ul>
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
  }
}
</script>

<style scoped lang="scss">
@import "~assets/css/varibles.scss";
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
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
</style>
