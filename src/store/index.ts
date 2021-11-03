import { createStore } from 'vuex'

interface SongInfo {
  id: number
  name: string
  al: {
    id: number
    name: string

    picUrl: string
  }
  ar: {
    name: string
  }[]
  fee: number
  originCoverType: number
  no: number
  ftype: number
  dt: number
}
interface SongData {
  id: number
  url: string
}
interface State {
  currentPlayStatus: boolean
  currentSongInfo: SongInfo
  currentSongData: SongData
  currentInstance: any
}
//  只能在这里创建音乐播放实例
import Taro from '@tarojs/taro'

// @ts-ignore
const instance = Taro.createInnerAudioContext()

// 创建一个新的 store 实例
const store = createStore<State>({
  state() {
    return {
      currentPlayStatus: false, // 是否正在播放， 默认 false
      currentSongInfo: {
        id: 0,
        name: '',
        al: {
          id: 0,
          name: '',
          picUrl: ''
        },
        ar: [
          {
            name: ''
          }
        ],
        fee: 0,
        originCoverType: 0,
        no: 0,
        ftype: 0,
        dt: 0
      }, // 当前播放歌曲信息
      currentSongData: {
        id: 0,
        url: ''
      }, // 当前歌曲 播放url信息
      currentInstance: instance // 当前实例，挂载在 全局 的吧
    }
  },
  mutations: {
    setCurrentData(state: State, payload: { song: SongInfo; data: SongData }) {
      state.currentSongInfo = JSON.parse(JSON.stringify(payload.song))
      state.currentSongData = JSON.parse(JSON.stringify(payload.data))
      // 赋值当前 歌曲 url
      state.currentInstance.src = state.currentSongData.url.replace('http', 'https')
      // 开启自动播放
      // state.currentInstance.autoplay = true
      this.commit('StartPlayer')
    },
    updateCurrentStatus(state: State, payload: boolean) {
      state.currentPlayStatus = payload
    },
    StartPlayer(state: State) {
      // 暂停正在播放的歌曲
      state.currentPlayStatus = false
      // 当 url 不存在 ，不允许播放，
      if (!state.currentInstance.src) return
      // 播放音乐方法
      state.currentInstance.play()
      state.currentPlayStatus = state.currentInstance.paused ? false : true
      console.log(`start -- success`)
    },
    PausePlayer(state: State) {
      // 当 url 不存在 ，不允许播放，
      if (!state.currentInstance.src) return
      // 没有播放时 不允许暂停
      if (!state.currentPlayStatus) return
      // 暂停 音乐 方法
      state.currentInstance.pause()
      // 更新播放状态
      state.currentPlayStatus = state.currentInstance.paused ? false : true
      console.log(`pause -- success`)
    }
  }
})

export default store
