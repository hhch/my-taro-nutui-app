<template>
  <view class="search-detail__wrapper">
    <searchNavbar v-model:value="searchData" :placeholder="searchDefault" @handleSearch="handleSearch"></searchNavbar>
    <scroll-view :scroll-y="true" class="detail-scroll__wrapper">
      <common-card :count="songListData.songCount">
        <template #content>
          <songListItem
            v-for="(item, index) in songListData.songs.slice(0, 5)"
            :key="item.id"
            :data="item"
            :showFirst="index === 0"
            :searchWord="searchData"
          ></songListItem>
        </template>
      </common-card>
      <common-card :count="playListData.playlistCount" :type="false" title="歌单" :showMore="false">
        <template #content>
          <playListItem
            v-for="(item, index) in playListData.playlists.slice(0, 5)"
            :key="item.id"
            :data="item"
            :showFirst="index === 0"
            :searchWord="searchData"
          ></playListItem>
        </template>
      </common-card>
    </scroll-view>
  </view>
</template>
<script>
import searchNavbar from '../../components/searchNavbar/searchNavbar.vue'
import commonCard from '../../components/card/commonCard.vue'
import songListItem from '../../components/card/songListItem.vue'
import playListItem from '../../components/card/playListItem.vue'
export default {
  components: { searchNavbar, commonCard, songListItem, playListItem },
  data() {
    return {
      searchData: '', //搜索字段
      searchDefault: '', // 默认搜索字段
      songListData: {
        songs: []
      }, //歌曲列表相关参数
      playListData: {
        playlists: []
      } // 歌单相关播放数据
    }
  },
  created() {
    this.searchData = this.$Taro.getCurrentInstance().router.params.keywords
    this.getDetailData()
  },
  methods: {
    handleSearch() {
      // 直接查询搜索结果
    },
    async getDetailData() {
      const res = await this.$ajax.get('/cloudsearch', { keywords: this.searchData })
      const res1 = await this.$ajax.get('/cloudsearch', { keywords: this.searchData, type: 1000 })
      if (res.code == 200) {
        this.songListData = res.result
      }
      if (res1.code == 200) {
        this.playListData = res1.result
      }
    }
  }
}
</script>
<style lang="scss">
.search-detail__wrapper {
  background-color: #f6f6f6;
  height: 100vh;
  .detail-scroll__wrapper {
    // 滚动容器吗，高度需要计算
    height: calc(100vh - 52px);
  }
}
</style>
