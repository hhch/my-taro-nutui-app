<template>
  <view class="tab-info__wrapper">
    <view class="tab-info__item" v-for="({ title, url }, index) in list" :key="index" @click="handleClick(url)">
      <text>{{ title }}</text>
    </view>
  </view>
</template>
<script lang="ts">
import Taro from '@tarojs/taro'
import { reactive } from '@vue/reactivity'
interface ListType {
  url: string
  title: string
}
export default {
  name: 'TabInfo',
  setup() {
    const list = reactive<ListType[]>([
      { title: '每日推荐', url: '/pages/search/search' },
      { title: '排行榜', url: '/pages/search/search' },
      { title: '歌单', url: '/pages/search/search' }
    ])
    const handleClick = (url: string): void => {
      Taro.navigateTo({ url })
    }
    return {
      list,
      handleClick
    }
  }
}
</script>
<style lang="scss">
.tab-info__wrapper {
  display: flex;
  font-size: 14px;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  flex-wrap: nowrap;
  overflow: auto;
  .tab-info__item {
    min-width: max-content;
  }
}
</style>
