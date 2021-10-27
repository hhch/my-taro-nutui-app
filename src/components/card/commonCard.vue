<template>
  <view class="common_card__wrapper" v-if="list.length !== 0">
    <view class="common_card__header">
      <view class="title">
        <text>{{ title }}</text>
      </view>
      <view class="more">
        <image class="more__image" src="../../asset/music/play.png"></image>
        <text>播放</text>
      </view>
    </view>
    <view class="common-card__content">
      <view class="content__item" v-for="(item, index) in list.slice(0, 5)" :key="item.id">
        <view class="left">
          <view class="title">
            <text>{{ item.name }}</text>
          </view>
          <view class="info">
            <text class="vip" v-if="item.fee == 1">vip</text>
            <!-- <text class="no" v-if="item.no == 1">试听</text> -->
            <text class="origin" v-if="item.originCoverType == 1">原唱</text>
            <text class="sq" v-if="item.v !== 150">SQ</text>
            <text>{{ `${item.ar[0].name} - ${item.al.name}` }}</text>
          </view>
          <view class="other" v-if="index == 0">
            <text class="other-item">999+评论</text>
            <text class="other-item">评论过万</text>
          </view>
        </view>
        <view class="right">
          <!-- <image class="right__image" v-if="item.cp !== 0" src="../../asset/music/video.png"></image> -->
          <image class="right__image" src="../../asset/music/action.png"></image>
        </view>
      </view>
    </view>
    <view class="common-card__footer" v-if="showAll">
      <text>{{ `查看全部${count}首${title}` }}</text>
      <image class="common-card__footer-image" src="../../asset/music/right.png"></image>
    </view>
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
  margin: 15px;
  border-radius: 6px;
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
  @mixin info {
    font-size: 8px;
    border-radius: 4px;
    margin-right: 2px;
    padding: 0px 2px;
  }
  .common-card__content {
    padding: 0 10px;
    .content__item {
      display: flex;
      min-height: 48px;
      justify-content: space-between;
      padding: 4px 0;
      border-top: 1px solid rgba(#a2a2a2, 0.3);
      .left {
        .title {
          color: rgba(#000, 0.8);
          font-size: 14px;
          font-weight: 600;
        }
        .info {
          font-size: 12px;
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
          .origin {
            font-size: 8px;
            background-color: #e60026;
            color: white;
            border-radius: 2px;
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
      .right {
        align-self: center;
        .right__image {
          width: auto;
          height: 20px;
          margin-left: 10px;
        }
      }
    }
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
