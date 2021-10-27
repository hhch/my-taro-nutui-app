<template>
  <view class="search-wrapper">
    <!-- 搜索 Navbar -->
    <searchNavbar v-model:value="searchData" :placeholder="searchDefault" @handleSearch="handleSearch" @handleEnter="hanleToDetail"></searchNavbar>
    <template v-if="!searchStatus">
      <view class="search-tab">
        <view class="tab-item">
          <text class="tab-item-text active">热搜榜</text>
          <text class="tab-item-text">视频榜</text>
          <text class="tab-item-text">播客榜</text>
        </view>
        <view class="tab-more">
          <nut-icon name="success"></nut-icon>
          <text>播放</text>
        </view>
      </view>
      <view class="search-hot" v-if="searchHotList.length !== 0">
        <view class="search-item" v-for="(item, index) in expendStatus ? searchHotList : searchHotList.slice(0, 10)" :key="index">
          <text class="hot-index">{{ index + 1 }}</text>
          <text class="hot-content">{{ item.searchWord }}</text>
          <image class="hot-image" v-if="item.iconUrl" :src="item.iconUrl" />
        </view>
        <view class="expend" @click="handleExpend" v-if="!expendStatus">
          <text>展开更多热搜</text>
          <nut-icon name="down-arrow"></nut-icon>
        </view>
      </view>
    </template>
    <template v-else>
      <view class="search-support">
        <view class="support-item" v-for="(item, index) in searchList" :key="index" @click="hanleToDetail(item)">
          <nut-icon name="search"></nut-icon>
          <view class="support-item-title">
            <text class="active">{{ searchData }}</text>
            <text>{{ item.keyword.replace(searchData, '') }}</text>
          </view>
        </view>
      </view>
    </template>
  </view>
</template>
<script>
import searchNavbar from '../../components/searchNavbar/searchNavbar.vue'
export default {
  name: 'search',
  components: { searchNavbar },
  data() {
    return {
      searchData: '',
      searchDefault: '', // 默认搜索关键词
      searchList: [], // 搜索推荐
      searchHotList: [], // 热搜列表
      expendStatus: false,
      searchStatus: false
    }
  },
  created() {
    this.getSearchDefault()
    this.getSearhHotData()
  },
  methods: {
    handleBack() {
      // 进入界面后返回上一页面
      this.$Taro.navigateBack()
    },
    async getSearchDefault() {
      // 获取默认搜索关键词
      const res = await this.$ajax.get('/search/default')
      this.searchDefault = res.data.showKeyword
    },
    async handleSearch() {
      // 处理搜索事件
      this.searchStatus = true
      await this.$ajax.get('/search/suggest', { keywords: this.searchData, type: 'mobile' }).then(res => {
        if (res.code == 200) {
          this.searchList = res.result.allMatch || []
        }
      })
      if (this.searchList.length == 0 || !this.searchData) this.searchStatus = false
    },
    async getSearhHotData() {
      const res = await this.$ajax.get('/search/hot/detail')
      this.searchHotList = res.data
    },
    handleExpend() {
      this.expendStatus = true
    },
    debounce(fn, ms = 500) {
      let timeoutId
      return function(...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn.apply(this, args), ms)
      }
    },
    hanleToDetail(item) {
      if (!this.searchData) this.searchData = this.searchDefault
      const keywords = item ? item.keyword : this.searchData
      // 根据搜索结果进入详情页
      this.$Taro.redirectTo({
        url: '/pages/searchDetail/searchDetail' + `?keywords=${keywords}`
      })
    }
  }
}
</script>
<style lang="scss">
.search-wrapper {
  // background-color: #eee;
  height: 100vh;
}
.search-hot {
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  margin: 0 10px 10px 10px;
  background-color: #fff;
  box-shadow: 0px 2px 4px #eee, 0px -2px 4px rgba($color: #000000, $alpha: 0.1);
  border-radius: 10px;
  .hot-image {
    //处理 hot 图片显示
    width: auto;
    height: 14px;
  }
  .search-item {
    // item 处理
    width: 48%;
    display: flex;
    align-items: center;
    .hot-index {
      width: 24px;
      height: 32px;
      text-align: center;
      line-height: 32px;
    }
    .hot-content {
      padding-right: 10px;
      max-width: 100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &:nth-child(-n + 3) {
      .hot-index {
        color: #e60026;
      }
      .hot-content {
        font-weight: 900;
      }
    }
  }
  .expend {
    width: 100%;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    color: #a2a2a2;

    letter-spacing: 1px;
  }
}
.search-tab {
  // 榜单 样式
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  .tab-item {
    .tab-item-text {
      padding-right: 20px;
      color: #a2a2a2;
    }
    .active {
      color: #000;
      font-weight: 900;
    }
  }
  .tab-more {
    border: 1px solid #eee;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 2px 6px;
    font-size: 12px;
  }
}
.search-support {
  // 搜索推荐样式
  padding: 10px;
  .support-item {
    display: flex;
    align-items: center;
    .nut-icon {
      padding: 10px 10px 10px 0;
      color: #a2a2a2;
    }
    .support-item-title {
      flex: 1;
      font-size: 14px;
      border-bottom: 1px solid rgba($color: #a2a2a2, $alpha: 0.4);
      .active {
        color: #a2a2a2;
      }
    }
  }
}
</style>
