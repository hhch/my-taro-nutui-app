<template>
  <view class="login-wrapper">
    <view class="login-tel">
      <label for="tel">手机号</label>
      <view class="input-wrap">
        <input
          class="input"
          type="number"
          v-model="userPhone"
          :maxlength="11"
          id="tel"
          placeholder="请输入账号"
        />
      </view>
    </view>
    <!-- <view class="login-captcha">
      <label for="captcha">验证码</label>
      <view class="input-wrap-ext">
        <input class="input" type="number" id="captcha" v-model="captcha" :maxlength="4" placeholder="请输入验证码" />
        <view class="login-captcha-btn" @click="getCaptcha">
          <text>获取</text>
        </view>
      </view>
    </view> -->
    <view class="login-tel">
      <label for="password">密码</label>
      <view class="input-wrap">
        <input
          class="input"
          type="password"
          id="password"
          v-model="password"
          placeholder="请输入密码"
        />
      </view>
    </view>
    <view class="login-btn" @click="handleLogin">
      <text>登录</text>
    </view>
    <nut-toast
      msg="请输入正确的手机号"
      v-model:visible="show"
      type="warn"
      :cover="true"
    />
  </view>
</template>
<script>
import ajax from '../../plugins/ajax'
import Taro, { setStorageSync } from '@tarojs/taro'
export default {
  name: 'login',
  data() {
    return {
      userPhone: null,
      captcha: null,
      password: null,
      rxg: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
      show: false,
      status: true
    }
  },
  methods: {
    handleLogin() {
      if (!this.rxg.test(this.userPhone)) {
        this.show = true
        return
      }
      ajax
        .get('/login/cellphone', {
          phone: this.userPhone,
          password: this.password
          // captcha: this.captcha,
        })
        .then(res => {
          Taro.setStorageSync('cookie', res.cookie)
          Taro.redirectTo({ url: '/pages/index/index' })
        })
    },
    getCaptcha() {
      if (!this.rxg.test(this.userPhone)) {
        this.show = true
        return
      }
      ajax.get('/captcha/sent', { phone: this.userPhone }).then(res => {
        console.log(res)
        this.status = true
      })
    }
  }
}
</script>
<style lang="scss">
.login-wrapper {
  background-color: rgba($color: #e60026, $alpha: 0.9);
  height: 100vh;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .login-tel,
  .login-captcha {
    display: flex;
    background-color: transparent;
    padding: 10px;
    align-items: center;
    label {
      padding-right: 10px;
      color: whitesmoke;
      width: 50px;
      display: block;
      text-align: right;
    }
    .input-wrap,
    .input-wrap-ext {
      width: 180px;
    }
    .input-wrap-ext {
      display: flex;

      .input {
        width: 110px;
      }
    }
    .input {
      // color: rgba($color: #e60026, $alpha: 0.5);
      background-color: rgba($color: #fff, $alpha: 0.99);
      padding: 4px;
      border-radius: 4px;
    }
  }
  .login-captcha-btn {
    margin-left: 10px;
    background-color: rgba($color: #fff, $alpha: 0.5);
    padding: 3px 8px;
    border-radius: 4px;
  }
  .login-btn {
    width: 230px;
    color: #000;
    background-color: #fff;
    border-radius: 6px;
    padding: 4px 9px;
    text-align: center;
    margin-top: 40px;
  }
}
</style>
