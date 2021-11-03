<template>
  <view class="my-user-like__wrapper" v-if="data.ids">
    <image class="my-user-like__image" :src="data.coverImgUrl"></image>
    <view class="my-user-like__content">
      <view class="nickname">我喜欢的音乐</view>
      <view class="signature">{{ data.ids.length }}首</view>
    </view>
    <view class="my-user-like__right">
      <text>心动模式</text>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  props: {
    data: Object
  },
  setup() {}
}
</script>
<style lang="scss">
.my-user-like__wrapper {
  display: flex;
  align-items: center;
  background-color: #eee;
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
  .my-user-like__image {
    width: 48px;
    height: 48px;
    border-radius: 6px;
  }
  .my-user-like__content {
    flex: 1;
    font-size: 14px;
    padding-left: 10px;
    .nickname {
      font-size: 14px;
      font-weight: bolder;
    }
    .signature {
      font-size: 12px;
    }
  }
  .my-user-like__right {
    font-size: 10px;
    border: 1px solid #eee;
    padding: 2px 6px;
    border-radius: 6px;
  }
}
</style>
