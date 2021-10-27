<template>
  <view class="search-input__navbar">
    <nut-icon name="left" class="search-main-icon" @click="handleBack"></nut-icon>
    <input
      class="search-input"
      type="text"
      v-model="searchData"
      :placeholder="placeholder"
      :maxlength="10"
      @input="handleSearch"
      @change="handleSearch"
      @keyup.enter="handleEnter"
    />
    <nut-icon name="close" v-if="searchData" class="search-input__close" @click="handleClear"></nut-icon>
  </view>
</template>
<script>
export default {
  name: 'searchNavbar',
  props: {
    placeholder: String,
    value: String
  },
  emits: ['update:value', 'handleSearch'],
  data() {
    return {
      searchData: ''
    }
  },
  created() {
    this.searchData = this.value
  },
  methods: {
    handleBack() {
      // 进入界面后返回上一页面
      this.$Taro.navigateBack()
    },
    handleSearch() {
      // 实现数据绑定
      this.$emit('update:value', this.searchData)
      this.$emit('handleSearch')
    },
    handleClear() {
      this.searchData = ''
      this.handleSearch()
    },
    handleEnter() {
      // 处理回车事件
      this.$emit('handleEnter', false)
    }
  }
}
</script>
<style lang="scss">
.search-input__navbar {
  display: flex;
  padding: 10px;
  height: 32px;
  align-items: center;
  position: relative;
  .search-main-icon {
    margin-right: 10px;
  }
  .search-input {
    flex: 1;
    border-bottom: 1px solid #a2a2a2;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 6px;
    color: #494949;
  }
  .search-input__close {
    position: absolute;
    right: 20px;
    font-size: 14px;
    &:hover {
      background-color: rgba(#000, 0.55);
    }
  }
}
</style>
