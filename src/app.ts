import { createApp } from 'vue'

import useNutUI from './plugins/nutui-taro'

import '@nutui/nutui-taro/dist/style.css'

import './app.scss'

import Taro from '@tarojs/taro'

import ajax from './plugins/ajax'

import store from './store/index'

interface LoginStatusFirst {
  data: object
}
interface LoginStatus {
  code: number
  account?: object
  profile?: object
}

const App = createApp({
  async onLaunch() {
    const res = (await ajax.get('/login/status')) as LoginStatusFirst
    const data = res.data as LoginStatus
    if (data.code !== 200) {
      console.log('没有登录 或者登录已过期')
      Taro.removeStorage({ key: 'cookie' })
    } else {
      //  刷新登录状态
      ajax.get('/login/refresh')
    }
  },
  onShow() {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

useNutUI(App)

App.use(store)

App.config.globalProperties.$ajax = ajax
App.config.globalProperties.$Taro = Taro

export default App
