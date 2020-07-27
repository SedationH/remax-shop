import React from 'react'
import { useAppEvent } from 'remax/macro';
import { checkLogin } from './utils/user'
import { set as setGlobalData, get as getGlobalData } from './global_data';
import app from './dva'
const App = ({
  children
}) => {
  // 检测用户登陆状态
  useAppEvent('onShow', () => {
    console.log('onshow')
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

export default app.start(App);