<template>
  <view class="my-player__wrapper">
    <view class="my-player__image ">
      <image :src="currentInfo.al.picUrl" class="my-player__image-content" :class="{ circle: currentStatus }" v-if="currentInfo.al.picUrl"></image>
      <view class="my-player__image__default" v-else>
        <image src="../../asset/player/wyy.jpg" class="my-player__image-content" />
      </view>
    </view>
    <scroll-view :scroll-x="true" class="my-player__title">
      <template v-if="currentInfo.name && currentInfo.ar[0].name">
        <view class="song-name">{{ currentInfo.name }}</view>
        <view class="user-info">{{ ` - ${currentInfo.ar[0].name}` }}</view>
      </template>
      <template v-else>
        <view class="my-player__title__default">暂时没有播放的歌曲哦</view>
      </template>
    </scroll-view>
    <view class="my-player__status">
      <image class="my-player__status-player" v-if="!currentStatus" src="../../asset/player/player.png" @click="handlePlay" />
      <image class="my-player__status-stop" v-else src="../../asset/player/stop.png" @click="handleStop" />
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
    },
    currentInstance() {
      // 当前播放实例
      return this.$store.state.currentInstance
    }
  },
  data() {
    return {
      AudioInstance: null // 当前audio 实例，用来播放音乐
    }
  },
  onHide() {
    console.log('www')
  },
  methods: {
    handlePlay() {
      // 播放音乐操作
      this.$store.commit('StartPlayer')
    },
    handleStop() {
      // 暂停音乐操作
      this.$store.commit('PausePlayer')
    },
    getPlayerCurrentTime() {
      // 获得当前播放 时间， 以获得播放进度，从而 展示
    }
  },
  beforeUnmount() {
    // 暂停音乐操作
    this.$store.commit('PausePlayer')
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
  background-color: #fff;
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
    display: flex;
    align-items: center;
    margin: 0 10px;
    .song-name {
      font-size: 14px;
      white-space: nowrap;
    }
    .user-info {
      font-size: 10px;
      color: #8d8d8d;
      white-space: nowrap;
    }
    .my-player__title__default {
      white-space: nowrap;
      font-size: 14px;
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
