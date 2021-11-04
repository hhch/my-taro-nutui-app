<template>
  <view class="playList-item__wrapper" @click="handlePlaylistClick">
    <view class="playList-item__wrapper_left">
      <image class="playList-item__wrapper_left-image" :src="data.coverImgUrl" />
    </view>
    <view class="playList-item__wrapper_right">
      <text class="palyList-item__wrapper_right_title">
        {{ data.name.trim() }}
      </text>
      <text class="palyList-item__wrapper_right_info">
        {{ `${data.trackCount}首,by ${data.creator.nickname}` }}
      </text>
      <text class="palyList-item__wrapper_right_more">
        <template v-if="!$slots.footer">
          <template v-if="showFirst">
            <text class="right-more__first">
              {{ `最多人点 本周热门收听` }}
            </text>
          </template>
          <template v-else>
            <text>
              包含《
              <text class="right-more__active">{{ searchWord }}</text>
              》
            </text>
          </template>
        </template>
        <template v-else>
          <slot name="footer" />
        </template>
      </text>
    </view>
  </view>
</template>
<script lang="ts">
import { PropType } from '@vue/runtime-core'
interface ItemType {
  coverImgUrl: string
  name: string
  trackCount: number
  creator: { nickname: string }
  playCount: number
}
export default {
  name: 'PlayListItem',
  props: {
    data: Object as PropType<ItemType>,
    showFirst: {
      type: Boolean,
      default: false
    },
    searchWord: String
  },
  emits: ['handlePlayListItemClick'],
  methods: {
    handlePlaylistClick() {
      this.$emit('handlePlayListItemClick', this.data)
    }
  }
}
</script>
<style lang="scss">
.playList-item__wrapper {
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 4px 10px;
  .playList-item__wrapper_left {
    // 处理左侧图片样式
    position: relative;
    z-index: 100;
    &::before {
      content: '';
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 8px;
      top: -2px;
      left: 4px;
      background-color: rgba($color: #000000, $alpha: 0.55);
    }
    .playList-item__wrapper_left-image {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      vertical-align: middle;
    }
  }
  .playList-item__wrapper_right {
    // 处理右侧 title 和 信息 样式
    flex: 1;
    padding-left: 5px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    .palyList-item__wrapper_right_title {
      color: #232323;
      font-weight: bold;
      font-size: 14px;
      width: 60vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .palyList-item__wrapper_right_info {
      color: #707070;
    }
    .palyList-item__wrapper_right_more {
      .right-more__first {
        color: #e0a521;
        font-size: 10px;
      }
      .right-more__active {
        color: #4e7a9f;
      }
    }
  }
}
</style>
