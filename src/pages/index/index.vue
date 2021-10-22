<template>
  <view class="index-wrapper">
    <search-input></search-input>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue'
import searchInput from '../../components/search/input.vue'
export default {
  name: 'Index',
  components: {
    searchInput
  },
  setup() {}
}
</script>

<style lang="scss">
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
