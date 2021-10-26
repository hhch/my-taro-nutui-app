<template>
  <view :class="style['search-wrapper']">
    <view :class="style['search__content']" @click="handleClick">
      <nut-icon :class="style['search__prefix']" name="search"></nut-icon>
      <text>搜索歌曲、歌手</text>
    </view>
  </view>
</template>
<script>
import style from './input.module.scss'
export default {
  name: 'searchInput',
  props: {
    status: String
  },
  data() {
    return {
      style
    }
  },
  methods: {
    handleClick() {
      this.$Taro.navigateTo({ url: '/pages/search/search' })
    }
  }
}
</script>
