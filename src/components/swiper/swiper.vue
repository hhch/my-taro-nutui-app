<template>
  <swiper class="swiper__content" indicator-color="#eee" indicator-active-color="#0000c2" :circular="true" :autoplay="true">
    <swiper-item v-for="(item, index) in list" :key="index">
      <image class="swiper__image" :src="item.pic" alt="" />
    </swiper-item>
  </swiper>
</template>
<script lang="ts">
import { PropType } from 'vue'
interface ListType {
  url: string
}
export default {
  name: 'ImageSwiper',
  props: {
    time: {
      type: Number,
      default: 3000
    },
    list: Array as PropType<ListType[]>
  },
  setup() {}
}
</script>
<style lang="scss">
.swiper__content {
  width: 100%;
  height: 150px;
}
.swiper__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-pagination-bullet {
  // 修改指示器样式
  width: 10px;
  height: 2px;
}
</style>
