import * as React from 'react';
import { View, Text, Image, navigateTo } from 'remax/wechat';
import Button from '@vant/weapp/lib/button'

export default () => {
  const handleShopClick = () => {
    navigateTo({
      url: '/pages/shop/shop'
    })
  }
  return (
    <View>
      <Button
        onclick={handleShopClick}
      >Go to Shop</Button>
    </View>
  );
};
