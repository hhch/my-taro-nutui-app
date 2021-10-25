<template>
  <view class="tab-info__wrapper">
    <view class="tab-info__item" v-for="({ name, iconUrl }, index) in list" :key="index" @click="handleClick(url)">
      <image class="image" :src="iconUrl"></image>
      <text class="tab-today" v-if="index == 0">{{ today }}</text>
      <text>{{ name }}</text>
    </view>
  </view>
</template>
<script lang="ts">
import Taro from '@tarojs/taro'
import ajax from '../../plugins/ajax'
interface ListType {
  name: string
  iconUrl: string
}
interface Api {
  data: ListType[]
  code: string
}
export default {
  name: 'TabInfo',

  data() {
    return {
      list: [],
      today: 0
    }
  },
  created() {
    this.getFoundData()
    this.today = new Date().getDate()
  },
  methods: {
    async getFoundData() {
      ajax.get('http://localhost:3000/homepage/dragon/ball').then((res: Api) => {
        this.list = res.data
      })
    },
    handleClick(url: string) {
      Taro.navigateTo({ url })
    }
  }
}
</script>
<style lang="scss">
.tab-info__wrapper {
  display: flex;
  font-size: 12px;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  flex-wrap: nowrap;
  overflow: auto;
  .tab-info__item {
    min-width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 0 0;
    position: relative;
    .image {
      width: 36px;
      height: 36px;
      background-color: rgba($color: #e60026, $alpha: 0.1);
      margin-bottom: 5px;
      border-radius: 50%;
    }
    .tab-today {
      position: absolute;
      font-size: 10px;
      left: 17px;
      top: 21px;
      font-weight: 600;
      color: rgba($color: #e60026, $alpha: 0.8);
    }
  }
}
</style>
