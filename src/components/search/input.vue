<template>
  <view class="search-wrapper">
    <view class="search__content" @click="handleClick">
      <nut-icon class="search__prefix" name="search"></nut-icon>
      <text>搜索歌曲、歌手</text>
    </view>
  </view>
</template>
<script lang="ts">
import Taro from '@tarojs/taro'
export default {
  name: 'searchInput',
  props: {
    status: String
  },
  setup() {
    const handleClick = () => {
      Taro.navigateTo({ url: '/pages/search/search' })
    }
    return {
      handleClick
    }
  }
}
</script>
<style lang="scss">
.search-wrapper {
  padding: 5px;
  font-size: 14px;
  background-color: #eee;
  .search__prefix {
    margin-right: 5px;
  }
  .search__content {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 2px 0;
  }
}
</style>
