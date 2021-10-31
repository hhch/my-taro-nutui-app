<template>
  <view class="my-user-info__wrapper">
    <image class="my-user-info__image" :src="data.avatarUrl"></image>
    <view class="my-user-info__content">
      <view class="nickname">{{ data.nickname }}</view>
      <view class="signature">{{ data.signature }}</view>
    </view>
    <nut-icon name="right"></nut-icon>
  </view>
</template>
<script lang="ts">
import { PropType } from '@vue/runtime-core'
interface ItemType {
  nickname: string
  avatarUrl: string
  signature: string
}
export default {
  props: {
    data: Object as PropType<ItemType>
  },
  setup() {}
}
</script>
<style lang="scss">
.my-user-info__wrapper {
  display: flex;
  align-items: center;
  background-color: #eee;
  border-radius: 10px;
  padding: 10px;
  .my-user-info__image {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  .my-user-info__content {
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
}
</style>
