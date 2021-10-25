<template>
  <view class="index-wrapper">
    <!-- input 搜索框 -->
    <search-input></search-input>
    <!-- swiper 组件 -->
    <image-swiper :list="data"></image-swiper>
    <!-- 模块组件 -->
    <!-- <TabInfo></TabInfo>
    -->
    <MusicCard>
      <MusicCardItem v-for="item in recommendList" :key="item.id" :data="item"></MusicCardItem>
    </MusicCard>
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
  setup() {
    const data = [{ url: 'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg' }, { url: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg' }, { url: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg' }]

    return {
      data
    }
  },
  data() {
    return {
      recommendList: []
    }
  },
  created() {
    this.getRecommendList()
  },
  methods: {
    async getRecommendList() {
      const res = await ajax.get('http://localhost:3000/personalized?limit=6')
      this.recommendList = res.result
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
