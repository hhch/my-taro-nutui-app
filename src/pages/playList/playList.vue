<template>
  <view class="playList-index__wrapper">
    <view class="playList-index__wrapper-header">
      <!-- 头部展示信息 -->
      <nut-navbar @on-click-back="back" @on-click-title="title" @on-click-send="send" title="订单详情"></nut-navbar>
    </view>
  </view>
</template>
<script>
export default {}
</script>
<style lang="scss">
.playList-index__wrapper {
  .playList-index__wrapper-header {
    .nut-navbar {
      height: 40px;
      border-bottom: none;
      box-shadow: none;
    }
  }
}
</style>
