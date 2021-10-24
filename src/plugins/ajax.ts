import Taro from '@tarojs/taro'

interface Response {
  data: object
  header: object
  statusCode: number
}
class Ajax {
  get(url: string, param: object, option: object) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url,
        method: 'GET',
        data: param,
        header: {
          'content-type': 'application/json'
        },
        ...option,
        success: function(res: Response) {
          resolve(res.data)
        },
        fail: function(err: object) {
          reject(err)
        }
      })
    })
  }
  post(url: string, param: object, option: object) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url,
        method: 'POST',
        data: param,
        header: {
          'content-type': 'application/json'
        },
        ...option,
        success: function(res: Response) {
          resolve(res.data)
        },
        fail: function(err: object) {
          reject(err)
        }
      })
    })
  }
}
export default new Ajax()
