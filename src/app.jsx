import React from 'react'
import { useAppEvent } from 'remax/macro';
import { checkLogin } from './utils/user'
import { set as setGlobalData, get as getGlobalData } from './global_data';
import app from './dva'
import { login, request } from 'remax/wechat'
const App = ({
  children
}) => {
  useAppEvent('onLaunch', () => {
    login().then(
      ({ code }) => console.log(code)
    )
  })
  // 检测用户登陆状态
  useAppEvent('onShow', () => {
    checkLogin()
      .then(
        () => setGlobalData('hasLogin', true)
      )
      .catch(
        () => setGlobalData('hasLogin', false)
      )
  });
  return children
}

export default app.start(App, {});