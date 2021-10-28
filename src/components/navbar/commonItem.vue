<template>
  <view class="my-playlist-common__header">
    <image class="my-playlist-common__header-image" :src="data.coverImgUrl" />
    <view class="my-playlist-common__header-info">
      <view class="common-header__title">{{ data.name }}</view>
      <view class="common-header__user">
        <image class="user-avatar" :src="data.creator.avatarUrl"></image>
        <text class="user-nickname">{{ data.creator.nickname }}</text>
      </view>
      <view class="common-header__desc">{{ data.description }}</view>
    </view>
  </view>
</template>
<script lang="ts">
import { PropType } from '@vue/runtime-core'
interface PlayList {
  id: number
  name: string
  coverImgUrl: string
  description: string
  updateFrequency: string
  backgroundCoverUrl: string
  specialType: number
  titleImageUrl: string
  creator: { avatarUrl: string; nickname: string }
}
export default {
  props: {
    data: {
      type: Object as PropType<PlayList>
    }
  }
}
</script>

<style lang="scss">
.my-playlist-common__header {
  display: flex;
  height: 150px;
  padding: 15px;
  .my-playlist-common__header-image {
    width: 120px;
    height: 120px;
    border-radius: 10px;
  }
  .my-playlist-common__header-info {
    flex: 1;
    font-size: 10px;
    padding-left: 15px;
    color: whitesmoke;
    .common-header__title {
      color: white;
      font-size: 16px;
      min-height: 50px;
      width: 200px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .common-header__user {
      display: flex;
      align-items: center;
      padding: 10px 0;
      .user-avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      .user-nickname {
        padding-left: 10px;
      }
    }
    .common-header__desc {
      width: 200px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
