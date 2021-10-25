import Taro from '@tarojs/taro'

const isUrl = (url: string): boolean => {
  return /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-\(\)]*[\w@?^=%&/~+#-\(\)])?$/.test(url)
}
const baseUrl = 'http://localhost:3000'
class Ajax {
  get(url: string, data?: object, option?: object) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: isUrl(url) ? url : baseUrl + url,
        data,
        method: 'GET',
        header: {},
        ...option,
        success: function(res) {
          resolve(res.data)
        },
        fail: function(err) {
          reject(err)
        }
      })
    })
  }
  post(url: string, data?: object, option?: object) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: isUrl(url) ? url : baseUrl + url,
        data,
        method: 'POST',
        header: {},
        ...option,
        success: function(res) {
          resolve(res.data)
        },
        fail: function(err) {
          reject(err)
        }
      })
    })
  }
}

export default new Ajax()
