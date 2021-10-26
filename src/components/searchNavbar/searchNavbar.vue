<template>
  <view class="search-input__navbar">
    <nut-icon name="left" class="search-main-icon" @click="handleBack"></nut-icon>
    <input class="search-input" type="text" v-model="searchData" :placeholder="placeholder" @input="handleSearch" @keyup.enter="handleSearch" />
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
    }
  }
}
</script>
<style lang="scss">
.search-input__navbar {
  display: flex;
  padding: 10px;
  align-items: center;
  .search-main-icon {
    margin-right: 10px;
  }
  .search-input {
    flex: 1;
    border-bottom: 1px solid #a2a2a2;
    font-size: 14px;
    padding: 3px 6px;
  }
}
</style>
