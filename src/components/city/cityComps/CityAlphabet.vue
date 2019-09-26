<template>
  <div class="list">
    <ul>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
