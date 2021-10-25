import Taro from '@tarojs/taro'

class Ajax {
  get(url: string, data?: object, option?: object) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url,
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
        url,
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
