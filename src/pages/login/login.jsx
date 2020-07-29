import React from 'react'
import { View, Button, login, checkSession, navigateBack, getStorageSync } from 'remax/wechat';
import { checkLogin, loginByWexin,xx } from '../../utils/user'
import { set as setGlobalData, get as getGlobalData } from '../../global_data';

export default function Login(

) {
  const wxLogin = (res) => {
    const userInfo = {
      ...res.detail.userInfo,
      avatar: res.detail.userInfo.avatarUrl,
      nickname: res.detail.userInfo.nickName,
    }
    delete userInfo.nickName
    delete userInfo.avatarUrl
    checkLogin().catch(() => {
      loginByWexin(userInfo).then(
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

  const handleSearch = () => {
    console.log('search')
    console.log(getGlobalData('hasLogin'))
    console.log('sessionid',getStorageSync('sessionid'))
    console.log(xx(6))
  }
  return (
    <>
      <Button type="primary" open-type="getUserInfo" onGetUserInfo={wxLogin}>微信登陆</Button>
      <Button onClick={handleSearch}>Search</Button>
    </>
  )
}