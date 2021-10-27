<template>
  <view class="card__wrapper">
    <view class="card__header">
      <view class="card__header-title">
        <text>{{ title }}</text>
      </view>
    </view>
    <scroll-view class="card__content" :scroll-x="true">
      <slot></slot>
    </scroll-view>
  </view>
</template>
<script lang="ts">
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
  background-color: #fff;

  .card__header {
    .card__header-title {
      font-weight: 900;
      letter-spacing: 2px;
    }
  }
  .card__content {
    width: 100%;
    // overflow: auto;
    display: flex;
  }
}
</style>
