<template>
  <view class="card-item__wrapper">
    <view class="card-item__image">
      <image :scr="data.picUrl" />
    </view>
    <view class="card-item__title">
      <text>{{ data.name }}</text>
    </view>
  </view>
</template>
<script>
export default {
  name: 'MusicCardItem',
  props: {
    data: Object
  }
}
</script>
