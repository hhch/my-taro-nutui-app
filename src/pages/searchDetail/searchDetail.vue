<template>
  <view class="search-detail__wrapper">
    <searchNavbar v-model:value="searchData" :placeholder="searchDefault" @handleSearch="handleSearch"></searchNavbar>
    <common-card :list="ReturnData.songs" :count="ReturnData.songCount"></common-card>
  </view>
</template>
<script>
import searchNavbar from '../../components/searchNavbar/searchNavbar.vue'
import commonCard from '../../components/card/commonCard.vue'
export default {
  components: { searchNavbar, commonCard },
  data() {
    return {
      searchData: '', //搜索字段
      searchDefault: '', // 默认搜索字段
      ReturnData: {}
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
      if (res.code == 200) {
        this.ReturnData = res.result
      }
    }
  }
}
</script>
<style lang="scss">
.search-detail__wrapper {
  background-color: #f6f6f6;
  height: 100vh;
}
</style>
