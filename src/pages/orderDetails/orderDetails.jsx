import React from 'react'
import { View } from "remax/wechat"

export default ({
  location
}) => {

  console.log(location)

  return (
    <View>
      This is orderDetail {location.query.sort}
    </View>
  )
}