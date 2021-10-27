<template>
  <view class="my-navbar__wrapper">
    <nut-icon name="left" @click="handleBack"></nut-icon>
    <text class="my-navbar__titile">
      {{ title }}
    </text>
    <slot name="action" class="my-navbar__action" v-if="$slots.action"></slot>
  </view>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'header'
    }
  },
  emits: ['handleBack'],
  methods: {
    handleBack() {
      this.$emit('handleBack')
    }
  }
}
</script>
<style lang="scss">
.my-navbar__wrapper {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 10px;
  .nut-icon {
    padding-right: 10px;
  }
  background-color: transparent;
  .my-navbar__titile {
    font-size: 16px;
    font-weight: bolder;
  }
  .my-navbra__action {
    justify-self: flex-end;
  }
}
</style>
