<template>
  <view class="playList-index__wrapper" v-if="Object.keys(playlist).length !== 0">
    <scroll-view :scroll-y="true" class="playList-index__wrapper-header">
      <!-- 头部展示信息 -->
      <play-header :img="backgroundCoverUrl">
        <template #navbar>
          <playListNavbar :title="specialType == 100 ? '官方动态歌单' : '歌单'" />
        </template>
        <template #content>
          <special-item :data="playlist" v-if="specialType == 100" />
          <common-item :data="playlist" v-if="specialType == 0" />
        </template>
      </play-header>
      <view class="playList-index-opeartion">
        <view class="playList-action__left">
          <nut-icon name="search"></nut-icon>
          <view class="playList-action__left-text">
            <text class="left-text_title">播放全部</text>
            <text class="left-text_num">({{ playlist.trackCount }})</text>
          </view>
        </view>
        <view class="playList-action__right">
          <nut-icon name="download"></nut-icon>
          <nut-icon name="success"></nut-icon>
        </view>
      </view>
      <scroll-view :scroll-y="true" class="playlist-index-content">
        <songListItem
          v-for="(item, index) in AllPlayList"
          :key="item.id"
          :data="item"
          :other="getCurrentSongUrl(item)"
          :border="false"
          @handleItemClick="handleSongItemClick"
        >
          <template #index>
            <view class="playlist-index-content-index">
              <text class="number">{{ index + 1 }}</text>
            </view>
          </template>
        </songListItem>
      </scroll-view>
    </scroll-view>
    <Player />
  </view>
</template>
<script>
import specialItem from '../../components/navbar/specialItem.vue'
import playHeader from '../../components/navbar/playHeader.vue'
import playListNavbar from '../../components/navbar/playListNavbar.vue'
import songListItem from '../../components/card/songListItem.vue'
import commonItem from '../../components/navbar/commonItem.vue'
import { group } from '../../utils/utils'
export default {
  components: {
    playListNavbar,
    songListItem,
    playHeader,
    commonItem,
    specialItem
  },
  data() {
    return {
      playListId: 0,
      playlist: {},
      specialType: 0,
      backgroundCoverUrl: '',
      trackIds: [], // 存放歌单所有id的列表
      AllPlayList: [], // 所有歌曲id获得的数据
      AllSongList: [] // 根据 trackIds 获取到歌曲的 url 信息
    }
  },
  created() {
    this.playListId = this.$Taro.getCurrentInstance().router.params.id
    this.GetPlayListDetail()
  },
  methods: {
    async GetPlayListDetail() {
      const res = await this.$ajax.get('/playlist/detail', {
        id: this.playListId
      })
      this.playlist = res.playlist
      this.specialType = res.playlist.specialType
      this.backgroundCoverUrl = res.playlist.backgroundCoverUrl
      this.trackIds = res.playlist.trackIds
      await this.GetAllPlayListData()
    },
    getCurrentSongUrl({ id }) {
      // 从获取音乐url中正确拿到对应的 数据
      return this.AllSongList.filter(i => i.id == id)[0] || {}
    },
    async GetAllPlayListData() {
      const data = group(this.trackIds, 20)
      data.forEach(async element => {
        const ids = element.map(i => i.id).join()
        const res = await this.$ajax.get('/song/detail', { ids })
        this.AllPlayList = [...this.AllPlayList, ...res.songs]
        this.$ajax.get('/song/url', { id: ids }).then(res => {
          // 异步获取 歌曲url，
          this.AllSongList = [...this.AllSongList, ...res.data]
        })
      })
    },
    handleSongItemClick({ song, data }) {
      // 处理 Item 点击事件，一般是用来处理播放音乐信息

      // 传递当前信息
      this.$store.commit('setCurrentData', { song, data })
    }
  }
}
</script>
<style lang="scss">
.playList-index__wrapper {
  .playList-index__wrapper-header {
    height: calc(100vh - 50px);
    .nut-navbar {
      height: 40px;
      border-bottom: none;
      box-shadow: none;
    }
  }
}
.playList-index-opeartion {
  // 操作列表位置，注意吸顶
  position: sticky;
  top: 50px;
  height: 30px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  .playList-action__left {
    display: flex;
    align-items: center;
    .nut-icon {
      padding: 0 10px;
    }
    .playList-action__left-text {
      font-size: 14px;
      .left-text_title {
        margin-right: 5px;
        font-size: 16px;
        font-weight: bolder;
      }
      .left-text_num {
        color: #8d8d8d;
      }
    }
  }
  .playList-action__right {
    margin-left: auto;
    .nut-icon:not(:last-child) {
      margin-right: 15px;
    }
  }
}
.playlist-index-content {
  height: calc(100vh - 150px);
}
.playlist-index-content-index {
  width: max-content;
  text-align: center;
  color: #8d8d8d;
}
</style>
