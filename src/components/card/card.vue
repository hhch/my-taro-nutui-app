<template>
  <view class="card__wrapper">
    <view class="card__header">
      <view class="card__header-title">
        <text>{{ title }}</text>
      </view>
    </view>
    <view class="card__content">
      <slot></slot>
    </view>
  </view>
</template>
<script>
export default {
  name: 'MusicCard',
  props: {
    title: {
      type: String,
      default: '推荐歌单'
    }
  }
}
</script>
<style lang="scss">
.card__wrapper {
  padding: 10px;
  font-size: 16px;
  .card__header {
    .card__header-title {
      font-weight: 900;
    }
  }
  .card__content {
    width: 100%;
    overflow: auto;
    display: flex;
  }
}
</style>
