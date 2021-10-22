<template>
  <view class="card__wrapper">
    <view class="card__header">
      <view class="card__header-title">
        <text>Title</text>
      </view>
      <view class="card__header-title">
        <text>更多</text>
      </view>
    </view>
    <view class="card__content">
      <slot></slot>
    </view>
  </view>
</template>
<script>
export default {
  name: 'MusicCard'
}
</script>
