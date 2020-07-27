import { setStorageSync, getStorageSync, checkSession, login } from 'remax/wechat';
import { loginByWeixin } from '../services/auth';

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
export function loginByWexin() {

  return new Promise((resolve, reject) => {
    login()
      .then((res) => {
        loginByWeixin({
          code: res.code,
        })
          .then(
            loginRes => {
              setStorageSync('session', loginRes.session)
              resolve(loginRes)
            }
          )
      })
      .catch(err => reject(err))
  })
}