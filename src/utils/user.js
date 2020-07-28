import { setStorageSync, getStorageSync, checkSession, login } from 'remax/wechat';
import { loginByWeixin } from '../services/auth';

function getSessionid(loginRes) {
  const cookie = loginRes.cookies[0]
  const index = cookie.indexOf('sessionid') + 'sessionid'.length + 1
  let sessionid = ''
  for (let i = index; i < cookie.length; i++) {
    if (cookie[i] === ';' || sessionid[i] === ' ') break
    sessionid += cookie[i]
  }
  return sessionid
}

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
  return new Promise((resolve, reject) => {
    login()
      .then((res) => {
        loginByWeixin({
          code: res.code,
          ...userInfo
        })
          .then(
            loginRes => {
              console.log(getSessionid(loginRes))
              setStorageSync('sessionid', getSessionid(loginRes))
              resolve(loginRes)
            }
          )
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}