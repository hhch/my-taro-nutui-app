<template>
  <view class="common_card__wrapper" :style="hasMargin ? styles : {}">
    <template v-if="$slots.title">
      <slot name="title" />
    </template>
    <view class="common_card__header" v-else>
      <view class="title">
        <text>{{ title }}</text>
      </view>
      <view class="more" v-if="showMore">
        <image class="more__image" src="../../asset/music/play.png"></image>
        <text>播放</text>
      </view>
    </view>
    <view class="common-card__content">
      <slot name="content"></slot>
    </view>
    <view class="common-card__footer" v-if="showAll">
      <text>{{ `查看全部${count}${type ? '首' : '个'}${title}` }}</text>
      <image class="common-card__footer-image" src="../../asset/music/right.png"></image>
    </view>
  </view>
</template>
<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'commonCard',
  props: {
    title: {
      type: String,
      default: '单曲'
    },
    showAll: {
      type: Boolean,
      default: true
    },
    showMore: {
      type: Boolean,
      default: true
    },
    count: Number,
    type: {
      type: Boolean,
      default: true
    },
    hasMargin: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const styles = reactive({
      margin: `15px`
    })
    return {
      styles
    }
  }
}
</script>
<style lang="scss">
.common_card__wrapper {
  border-radius: 6px;
  margin: 10px 0;
  background-color: #fff;
  .common_card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .title {
      font-size: 16px;
      font-weight: 1000;
    }
    .more {
      padding: 2px 6px;
      font-size: 10px;
      display: flex;
      align-items: center;
      border-radius: 10px;
      color: rgba(#000, 0.8);
      border: 1px solid #e6e6e6;
      .more__image {
        width: 10px;
        height: 10px;
        margin-right: 2px;
      }
    }
  }

  .common-card__content {
    padding-bottom: 10px;
  }
  .common-card__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    padding: 10px 0;
    border-top: 1px solid rgba(#a2a2a2, 0.3);
    color: #afafaf;
    .common-card__footer-image {
      width: 12px;
      height: 12px;
    }
  }
}
</style>
