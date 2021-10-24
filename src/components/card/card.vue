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
  .card__header {
    font-size: 16px;
    padding: 10px;
    .card__header-title {
      font-weight: 900;
    }
  }
}
</style>
