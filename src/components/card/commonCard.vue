<template>
  <view class="common_card__wrapper">
    <view class="common_card__header">
      <view class="title">
        <text>{{ title }}</text>
      </view>
      <view class="more">
        <text>播放</text>
      </view>
    </view>
    <view class="common-card__content">
      <view class="content__item" v-for="item in list.slice(0, 5)" :key="item.id">
        <view class="left">
          <view class="title">
            <text>{{ item.name }}</text>
          </view>
          <view class="info">
            <text>{{ `${item.ar[0].name} - ${item.al.name}` }}</text>
          </view>
          <view class="other">
            <!-- <text v-if="item.mark > 10000">评论过万</text> -->
          </view>
        </view>
        <view class="right"></view>
      </view>
    </view>
    <view class="common-card__footer" v-if="showAll"></view>
  </view>
</template>
<script>
export default {
  name: 'commonCard',
  props: {
    title: {
      type: String,
      default: '单曲'
    },
    list: {
      type: Array,
      default: []
    },
    showAll: {
      type: Boolean,
      default: true
    },
    count: Number
  }
}
</script>
<style lang="scss">
.common_card__wrapper {
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
  background-color: #fff;
  .common_card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(#a2a2a2, 0.6);
    .title {
      font-size: 16px;
      font-weight: 1000;
    }
    .more {
      font-size: 12px;
    }
  }
  .common-card__content {
    .content__item {
      display: flex;
      min-height: 48px;
      justify-content: space-between;
      padding: 4px 0;
      border-bottom: 1px solid rgba(#a2a2a2, 0.3);
      .left {
        .title {
          color: rgba(#000, 0.8);
          font-size: 14px;
          font-weight: 600;
        }
        .info {
          font-size: 12px;
          color: #7c7c7c;
        }
        .other {
          color: #e3cd74;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
