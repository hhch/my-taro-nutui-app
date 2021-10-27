<template>
  <view class="playList-index__wrapper">
    <view class="playList-index__wrapper-header">
      <!-- 头部展示信息 -->
      <Navbar></Navbar>
    </view>
  </view>
</template>
<script>
import Navbar from '../../components/navbar/navbar.vue'
export default {
  components: { Navbar },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.playList-index__wrapper {
  .playList-index__wrapper-header {
    .nut-navbar {
      height: 40px;
      border-bottom: none;
      box-shadow: none;
    }
  }
}
</style>
