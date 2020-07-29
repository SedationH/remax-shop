import { setStorageSync, getStorageSync, checkSession, login } from 'remax/wechat';
import { loginByWeixin, xxx } from '../services/auth';
import { getCookie } from './utils'

/**
 * 判断用户是否登陆
 * 登陆是否仍然有效
 */
export function checkLogin() {
  return new Promise((resolve, reject) => {
    if (getStorageSync('userInfo') && getStorageSync('sessionid')) {
      checkSession().then(() => {
        resolve(true)
      }).catch(() => reject(false))
    } else {
      reject(false)
    }
  })
}

/**
 * 微信登陆
 */
export function loginByWexin(userInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const { code } = await login()
      const loginRes = await loginByWeixin({
        code,
        ...userInfo
      })
      const sessionid = getCookie(loginRes, 'sessionid')
      console.log(1)
      setStorageSync('sessionid', sessionid)
      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

export function xx() {
  xxx({
    id: 6
  }).then(
    res => console.log(res)
  )
}