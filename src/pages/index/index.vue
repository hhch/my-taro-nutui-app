<template>
  <view class="index-wrapper">
    <!-- input 搜索框 -->
    <search-input></search-input>
    <scroll-view class="index-scroll__wrapper" :scroll-y="true">
      <!-- swiper 组件 -->
      <image-swiper :list="data"></image-swiper>
      <!-- 模块组件 -->
      <!-- <TabInfo></TabInfo> -->
      <MusicCard>
        <MusicCardItem v-for="item in recommendList" :key="item.id" :data="item" @handleCardClick="handleCardClick"></MusicCardItem>
      </MusicCard>
    </scroll-view>
    <!-- <Player /> -->
  </view>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import searchInput from '../../components/search/input.vue' // 搜索框组件
import ImageSwiper from '../../components/swiper/swiper.vue' // 轮播图组件
import TabInfo from '../../components/info/info.vue' // 每日菜单  等导航tab
import MusicCard from '../../components/card/card.vue' // 推荐歌单模块基本组件

import MusicCardItem from '../../components/card/cardItem.vue' // 推荐歌单模块基本组件
import ajax from '../../plugins/ajax'

export default {
  name: 'Index',
  components: {
    searchInput,
    ImageSwiper,
    TabInfo,
    MusicCard,
    MusicCardItem
  },

  data() {
    return {
      data: [],
      recommendList: [],
      todayStart: Math.floor(new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000),
      todayEnd: 0,
      MusicDateInfo: {}
    }
  },
  created() {
    this.todayEnd = this.todayStart + 24 * 60 * 60 * 1000
    this.getRecommendList()
    this.getBannerData()
    this.getMusicDateInfo()
  },
  computed: {
    currentInstance() {
      return this.$store.state.currentInstance
    }
  },

  methods: {
    async getRecommendList() {
      const res = await ajax.get('http://localhost:3000/personalized?limit=5')
      this.recommendList = res.result
    },
    async getBannerData() {
      const res = await ajax.get('http://localhost:3000/banner?type=1')
      this.data = res.banners
    },
    async getMusicDateInfo() {
      const res = await ajax.get('/calendar', {
        startTime: this.todayStart,
        endTime: this.todayEnd
      })
      this.MusicDateInfo = res.data
    },
    async getHomeEnterData() {
      const res = await ajax.get('http://localhost:3000/homepage/block/page', {
        refresh: true
      })
    },
    async getRecommendResource() {
      const res = await ajax.get('/recommend/resource')
    },
    handleCardClick(data) {
      this.$Taro.navigateTo({
        url: '/pages/playList/playList' + `?id=${data.id}`
      })
    }
  }
}
</script>

<style lang="scss">
.index-wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.index-scroll__wrapper {
  height: calc(100vh - 135px);
}
</style>
