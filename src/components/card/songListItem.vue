<template>
  <view class="songList-item__wrapper" :class="{ border: border }" @click="handleItemClick">
    <view class="songList-item__wrapper-index" v-if="$slots.index">
      <slot name="index" />
    </view>
    <view class="songList-item__wrapper-left">
      <view class="title">
        {{ data.name }}
      </view>
      <view class="info">
        <view class="vip" v-if="data.fee == 1">vip</view>
        <!-- <text class="no" v-if="data.no == 1">试听</text> -->
        <view class="origin" v-if="data.originCoverType == 1">原唱</view>
        <view class="sq" v-if="data.v !== 150">SQ</view>
        <view class="text">{{ `${data.ar[0].name} - ${data.al.name}` }}</view>
      </view>
      <view class="other" v-if="showFirst">
        <text class="other-item">999+评论</text>
        <text class="other-item">评论过万</text>
      </view>
    </view>
    <view class="songList-item__wrapper-right">
      <!-- <image class="right__image" v-if="item.cp !== 0" src="../../asset/music/video.png"></image> -->
      <image class="right__image" src="../../asset/music/action.png" @click="hanleActionClick"></image>
    </view>
  </view>
</template>
<script lang="ts">
import { PropType } from '@vue/runtime-core'
interface ItemType {
  name: string
  fee: number
  originCoverType: number
  v: number
  al: { name: string }
  ar: { name: string }[]
  no: number
}
export default {
  props: {
    data: Object as PropType<ItemType>, // 歌曲基本信息
    other: Object, // 存放音乐url 信息
    showFirst: {
      type: Boolean,
      default: false
    },
    searchWord: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  emits: ['hanleActionClick', 'handleItemClick'],
  methods: {
    hanleActionClick(e) {
      // 操作 点击时间
      e.stopPropagation()
      this.$emit('hanleActionClick', { song: this.data, data: this.other })
    },
    handleItemClick() {
      // 整个点击事件，用来播放音乐
      this.$emit('handleItemClick', { song: this.data, data: this.other })
    }
  }
}
</script>
<style lang="scss">
@mixin info {
  border-radius: 4px;
  margin-right: 2px;
  padding: 0px 2px;
}
.border {
  border-top: 1px solid rgba(#a2a2a2, 0.3);
}
.songList-item__wrapper {
  display: flex;
  min-height: 48px;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  padding: 5px 0;
  .songList-item__wrapper-index {
    font-size: 14px;
    padding: 0 10px;
  }
  .songList-item__wrapper-left {
    flex: 1;
    .title {
      color: rgba(#000, 0.8);
      font-size: 14px;
      font-weight: 600;
      width: 60vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-bottom: 5px;
    }
    .info {
      display: flex;

      font-size: 8px !important;
      color: #7c7c7c;
      max-width: 70vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .sq {
        @include info();
        color: #e60026;
        border: 1px solid rgba(#a2a2a2, 0.3);
      }
      .vip {
        @include info();
        color: #d48169;
        border: 1px solid rgba(#a2a2a2, 0.3);
      }
      .text {
        width: 60vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .origin {
        font-size: 8px;
        background-color: #e60026;
        color: white;
        border-radius: 4px;
        margin-right: 2px;
        padding: 1px 1px;
      }
    }
    .other {
      color: #e3cd74;
      font-size: 8px;
      .other-item {
        margin-right: 5px;
      }
    }
  }
  .songList-item__wrapper-right {
    align-self: center;
    .right__image {
      width: auto;
      height: 20px;
      margin-left: 10px;
    }
  }
}
</style>
