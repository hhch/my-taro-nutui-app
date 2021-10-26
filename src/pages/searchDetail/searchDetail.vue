<template>
  <view class="search-detail__wrapper">
    <searchNavbar v-model:value="searchData" :placeholder="searchDefault" @handleSearch="handleSearch"></searchNavbar>
  </view>
</template>
<script>
import searchNavbar from '../../components/searchNavbar/searchNavbar.vue'
export default {
  components: { searchNavbar },
  data() {
    return {
      searchData: '', //搜索字段
      searchDefault: '' // 默认搜索字段
    }
  },
  created() {
    this.searchData = this.$Taro.getCurrentInstance().router.params.keywords
    console.log(this.searchData)
  },
  methods: {
    handleSearch() {
      // 直接查询搜索结果
    }
  }
}
</script>
