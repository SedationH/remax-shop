import { request as rq, getStorageSync } from 'remax/wechat'
import { serialize } from './utils'


function assemblyCookies() {
  console.log(getStorageSync('sessionid'))
  return `sessionid=${getStorageSync('sessionid')}`
}

/**
 * 封装微信提供的request
 * 拦截加入验证身份
 */
export default function request(url, data = {}, method = 'GET') {
  if (method === 'GET') {
    url += serialize(data)
  }
  console.log(url)
  return new Promise((resolve, reject) => {
    rq({
      url, data, method,
      header: {
        'Content-Type': 'application/json',
        'cookie': assemblyCookies(),
      }
    })
      .then(
        res => {
          if (res.statusCode === 200) {
            resolve(res)
          } else {
            reject(res)
          }
        },
        err => reject(err)
      )
  })

}

request.get = (url, data) => request(url, data, 'GET')

request.post = (url, data) => request(url, data, 'POST')