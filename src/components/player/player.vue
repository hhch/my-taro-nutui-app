<template>
  <view class="my-player__wrapper">
    <view class="my-player__image ">
      <image :src="currentInfo.al.picUrl" class="my-player__image-content" :class="{ circle: currentStatus }" v-if="currentInfo.al.picUrl"></image>
      <view class="my-player__image__default" v-else>
        <text>111</text>
      </view>
    </view>
    <view class="my-player__title">
      <text class="song-name">{{ currentInfo.name }}</text>
      <text class="user-info">{{ `-${currentInfo.al.name}` }}</text>
    </view>
    <view class="my-player__status">
      <image class="my-player__status-player" v-if="!currentStatus" src="../../asset/player/player.png" />
      <image class="my-player__status-stop" v-else src="../../asset/player/stop.png" />
    </view>
    <view class="my-player__list">
      <nut-icon name="horizontal"></nut-icon>
    </view>
  </view>
</template>
<script>
export default {
  name: 'Player',
  computed: {
    currentInfo() {
      // 获取 vuex 的 音乐 基本信息
      return this.$store.state.currentSongInfo
    },
    currentData() {
      // 获取 vuex 的 音乐 播放url
      return this.$store.state.currentSongData
    },
    currentStatus() {
      // 获取 当前正在播放的状态
      return this.$store.state.currentPlayStatus
    }
  }
}
</script>
<style lang="scss">
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
.my-player__wrapper {
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  .my-player__image {
    background-image: url('https://s2.music.126.net/style/web2/img/ie6/singlecover.png?a1de50ab325dc0d2d7e96a4e4ca71668');
    background-size: contain;
    width: 50px;
    height: 50px;
    position: relative;
    .my-player__image-content {
      width: 33px;
      height: 33px;
      border-radius: 50%;
      position: absolute;
      left: 8.5px;
      top: 8.5px;
    }
    .circle {
      // 旋转特效
      // transition-duration: 2s;
      animation: rotate 36s linear infinite;
    }
  }
  .my-player__title {
    // 处理展示文字
    flex: 1;
    padding-left: 10px;
    .song-name {
      font-size: 14px;
      max-width: 60vw;
      white-space: nowrap;
      overflow: hidden;
    }
    .user-info {
      font-size: 10px;
      color: #8d8d8d;
    }
  }
  .my-player__status {
    // 播放和暂停
    width: 36px;
    height: 36px;
    border: 1px solid #eee;
    border-radius: 50%;
    position: relative;
    .my-player__status-player {
      width: 16px;
      height: 16px;
      position: absolute;
      left: 12px;
      top: 10px;
    }
    .my-player__status-stop {
      width: 16px;
      height: 16px;
      position: absolute;
      left: 10.5px;
      top: 10.5px;
    }
  }
  .my-player__list {
    margin-left: auto;
    padding-left: 20px;
  }
}
</style>
