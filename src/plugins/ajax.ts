import Taro from '@tarojs/taro'

const isUrl = (url: string): boolean => {
  return /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-\(\)]*[\w@?^=%&/~+#-\(\)])?$/.test(url)
}
const cookie = Taro.getStorageSync('cookie')

const baseUrl = 'http://localhost:3000'
class Ajax {
  get(url: string, data?: object, option?: object) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: isUrl(url) ? url : baseUrl + url,
        data: cookie
          ? {
              ...data,
              cookie
            }
          : data,
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
        data: cookie
          ? {
              ...data,
              cookie,
              timestamp: new Date().getTime()
            }
          : {
              ...data,
              timestamp: new Date().getTime()
            },
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
