<template>
  <view class="my-navbar__wrapper">
    <nut-icon name="left" @click="handleBack"></nut-icon>
    <text class="my-navbar__titile">
      {{ title }}
    </text>
    <template v-if="$slots.action">
      <slot name="action" class="my-navbar__action"></slot>
    </template>
    <template v-else>
      <view class="my-navbar__action">
        <nut-icon name="search"></nut-icon>
        <nut-icon name="horizontal"></nut-icon>
      </view>
    </template>
  </view>
</template>
<script>
export default {
  name: 'Navbar',
  props: {
    title: {
      type: String,
      default: '官方动态歌单'
    },
    img: String
  },
  methods: {
    handleBack() {
      // 进入界面后返回上一页面
      this.$Taro.navigateBack()
      this.$emit('handleBack')
    }
  }
}
</script>
<style lang="scss">
.my-navbar__wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: sticky;
  top: 0;
  height: 30px;
  padding: 10px;
  color: white;
  background-color: transparent;
  .my-navbar__titile {
    font-size: 16px;
    color: white;
    line-height: 30px;
    font-weight: bolder;
    padding-left: 10px;
    letter-spacing: 1px;
  }
  .my-navbar__action {
    margin-left: auto;
    .nut-icon {
      &:not(:last-child) {
        padding: 0 20px;
      }
    }
  }
}
</style>
