import React from 'react'
import { View, Button, login, checkSession, navigateBack } from 'remax/wechat';
import { checkLogin, loginByWexin } from '../../utils/user'
import { set as setGlobalData } from '../../global_data';

export default function Login(

) {
  const wxLogin = (res) => {
    checkLogin().catch(() => {
      loginByWexin().then(
        () => {
          setGlobalData('hasLogin', true)
          navigateBack({
            delta: 1
          })
          console.log('登录成功')
        }
      ).catch(() => {
        setGlobalData('hasLogin', false)
        console.log('登录失败')
      })
    })
  }
  return (
    <Button type="primary" open-type="getUserInfo" onGetUserInfo={wxLogin}>微信登陆</Button>
  )
}