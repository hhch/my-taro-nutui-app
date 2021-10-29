<template>
  <view class="my-playList__header">
    <view class="my-playlist-header__title">
      <image class="my-playlist-header__title-image" :src="data.titleImageUrl" />
    </view>
    <view class="my-playlist-header__update">
      {{ data.updateFrequency }}
    </view>
    <view class="my-playlist-header__desc">
      {{ data.description }}
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
.my-playList__header {
  height: initial;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-top: 100px;
  .my-playlist-header__title {
    .my-playlist-header__title-image {
      width: 180px;
      height: 30px;
      margin-left: 60px;
      vertical-align: bottom;
      // object-fit: cover;
    }
  }
  .my-playlist-header__update {
    color: white;
    font-size: 12px;
    letter-spacing: 1px;
    padding: 5px;
  }
  .my-playlist-header__desc {
    color: white;
    font-size: 10px;
    padding: 10px 10px 30px 10px;
    text-align: center;
  }
}
</style>
