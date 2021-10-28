<template>
  <view class="card-item__wrapper" @click="handleClick">
    <view class="card-item__image">
      <image class="image" :src="data.picUrl"></image>
      <text class="card-item-other">{{ filteWithNum(data.playCount) }}</text>
    </view>
    <text class="card-item-title">
      {{ data.name }}
    </text>
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
  emits: ['handleCardClick'],
  methods: {
    filteWithNum(data) {
      const Wan = data / 10000
      if (Wan > 10000) return `${(Wan / 10000).toFixed(2)}亿`
      if (Wan > 1) return `${Wan.toFixed(2)}万`
    },
    handleClick() {
      this.$emit('handleCardClick', this.data)
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
    z-index: 100;
    &::before {
      content: '';
      position: absolute;
      background-color: #eee;
      width: 92px;
      height: 92px;
      border-radius: 4px;
      top: -3px;
      left: 4px;
    }
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
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
</style>
