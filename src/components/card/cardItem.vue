<template>
  <view class="card-item__wrapper">
    <view class="card-item__image">
      <image class="image" :src="data.picUrl"></image>
      <text class="card-item-other">{{ filteWithNum(data.playCount) }}</text>
    </view>
    <view class="card-item-title ">
      <text>
        {{ data.name }}
      </text>
    </view>
  </view>
</template>
<script lang="ts">
import { PropType } from 'vue'
interface ItemType {
  picUrl: string
  name: string
  playCount: number
}
export default {
  name: 'MusicCardItem',
  props: {
    data: Object as PropType<ItemType>
  },
  methods: {
    filteWithNum(data) {
      if (data >= 10000) return `${parseInt(data / 10000)}万`
    }
  }
}
</script>
<style lang="scss">
.card-item__wrapper {
  width: 100px;
  margin: 10px 10px 10px 0;
  .card-item__image {
    position: relative;
    .card-item-other {
      position: absolute;
      right: 4px;
      top: 4px;
      z-index: 100;
      font-size: 10px;
      padding: 2px;
      color: rgba($color: #fff, $alpha: 0.8);
      background-color: rgba(#000, 0.55);
      border-radius: 4px;
      letter-spacing: 0.5px;
    }
    .image {
      width: 100px;
      height: 100px;
      border-radius: 10px;
    }
  }
  .card-item-title {
    font-size: 10px;
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
