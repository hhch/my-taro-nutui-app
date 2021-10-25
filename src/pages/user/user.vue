<template>
  <view>
    <text>qqqq</text>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
export default {
  created() {
    // 没有登录调到登录页
    this.CheckLoginStatus()
  },
  methods: {
    async CheckLoginStatus() {
      await Taro.getStorage({
        key: 'LoginStatus',
        success: res => {
          if (!res.data) Taro.redirectTo({ url: '/pages/login/login' })
        },
        fail: err => {
          Taro.redirectTo({ url: '/pages/login/login' })
        }
      })
    }
  }
}
</script>
