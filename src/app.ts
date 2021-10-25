import { createApp } from 'vue'

import useNutUI from './plugins/nutui-taro'

import '@nutui/nutui-taro/dist/style.css'

import './app.scss'

import ajax from './plugins/ajax'

const App = createApp({
  onShow() {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

useNutUI(App)

App.config.globalProperties.$ajax = ajax

export default App
