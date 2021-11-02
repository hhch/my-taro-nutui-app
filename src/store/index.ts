import { createStore } from 'vuex'

interface SongInfo {
  id: number
  name: string
  al: {
    id: number
    name: string
    picUrl: string
  }
  fee: number
  originCoverType: number
  no: number
  ftype: number
}
interface SongData {
  id: number
  url: string
}
interface State {
  currentPlayStatus: boolean
  currentSongInfo: SongInfo
  currentSongData: SongData
}
// 创建一个新的 store 实例
const store = createStore<State>({
  state() {
    return {
      currentPlayStatus: false, // 是否正在播放， 默认 false
      currentSongInfo: {
        id: 0,
        name: 'string',
        al: {
          id: 0,
          name: '',
          picUrl: ''
        },
        fee: 0,
        originCoverType: 0,
        no: 0,
        ftype: 0
      }, // 当前播放歌曲信息
      currentSongData: {
        id: 0,
        url: ''
      } // 当前歌曲 播放url信息
    }
  },
  mutations: {
    setCurrentData(state: State, payload: { song: SongInfo; data: SongData }) {
      state.currentSongInfo = JSON.parse(JSON.stringify(payload.song))
      state.currentSongData = JSON.parse(JSON.stringify(payload.data))
    }
  }
})

export default store
