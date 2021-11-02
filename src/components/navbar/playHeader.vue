<template>
  <view class="player-header__wrapper" :style="classes" :class="{ special: img, common: !img }">
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
    img: String,
    height: {
      type: String,
      default: 'auto'
    }
  },
  setup(props) {
    const imgDefault = 'https://p1.music.126.net/tVBUL6Ghx9htyEuuFsWTmg==/109951165507341421.jpg'
    const classes = reactive({
      backgroundImage: `url('${props.img || imgDefault}')`
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

  background-size: cover;
  display: flex;
  flex-direction: column;
  .player-header__content {
    flex: 1;
  }
  &.special {
    min-height: 300px;
  }
  &.common {
    min-height: 250px;
  }
}
</style>
