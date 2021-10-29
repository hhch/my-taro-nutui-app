<template>
  <view class="player-header__wrapper" :style="classes">
    <slot name="navbar"></slot>
    <view class="player-header__content">
      <slot name="content"></slot>
    </view>
  </view>
</template>
<script>
import { reactive } from '@vue/reactivity'
export default {
  props: {
    img: {
      type: String,
      default: 'https://p1.music.126.net/tVBUL6Ghx9htyEuuFsWTmg==/109951165507341421.jpg'
    },
    height: {
      type: String,
      default: 'auto'
    }
  },
  setup(props) {
    const classes = reactive({
      backgroundImage: `url('${props.img}')`
    })
    return {
      classes
    }
  }
}
</script>
<style lang="scss">
.player-header__wrapper {
  // background-image: url('https://p1.music.126.net/tVBUL6Ghx9htyEuuFsWTmg==/109951165507341421.jpg');
  min-height: 250px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  .player-header__content {
    flex: 1;
  }
}
</style>
