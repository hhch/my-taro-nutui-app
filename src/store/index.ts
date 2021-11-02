import { createStore } from 'vuex'

interface State {
  currentPlayStatus: boolean
}
// 创建一个新的 store 实例
const store = createStore<State>({
  state() {
    return {
      currentPlayStatus: false
    }
  },
  mutations: {}
})

export default store
