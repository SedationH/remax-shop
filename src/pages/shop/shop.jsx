import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import VanSidebar from '@vant/weapp/lib/sidebar'
import VanSidebarItem from '@vant/weapp/lib/sidebar-item'
import VanTab from '@vant/weapp/lib/tab'
import VanTabs from '@vant/weapp/lib/tabs'
import VanCard from '@vant/weapp/lib/card'
import VanButton from '@vant/weapp/lib/button'
import VanGoodsAction from '@vant/weapp/lib/goods-action'
import VanGoodsActionButton from '@vant/weapp/lib/goods-action-button'
import VanGoodsActionIcon from '@vant/weapp/lib/goods-action-icon'


import style from './shop.css'
import img1 from '@/assets/images/defaultUserImag.png'

export default () => {

  const sideBarList = [
    '标签1',
    '标签2',
    '标签2',
    '标签3',
    '标签4',
    '标签5',
    '标签6',
    '标签7',
    '标签8',
    '标签9',
    '标签10',
    '标签2aaaaaaaaaaa',
    '❤️',
    '标签2',
    '标签2',
  ]

  return (
    <View className={style.shop}>
      <View className={style.up}>
        <View className={style.left}>
          <VanSidebar>
            {
              sideBarList.map(e => (
                <VanSidebarItem title={e} />
              ))
            }
          </VanSidebar>
        </View>
        <View
          className={style.right}
          swipeable
          ellipsis={false}
        >
          <VanTabs>
            <VanTab title="tab1">
              <View className={style.content}>
                <VanCard
                  num="2"
                  tag="标签"
                  price="10.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb={img1}
                >
                  <view slot="footer">
                    <VanButton size="mini">按钮</VanButton>
                    <VanButton size="mini">按钮</VanButton>
                  </view>
                </VanCard>
                <VanCard
                  num="2"
                  tag="标签"
                  price="10.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb={img1}
                >
                  <view slot="footer">
                    <VanButton size="mini">按钮</VanButton>
                    <VanButton size="mini">按钮</VanButton>
                  </view>
                </VanCard>
                <VanCard
                  num="2"
                  tag="标签"
                  price="10.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb={img1}
                >
                  <view slot="footer">
                    <VanButton size="mini">按钮</VanButton>
                    <VanButton size="mini">按钮</VanButton>
                  </view>
                </VanCard>
                <VanCard
                  num="2"
                  tag="标签"
                  price="10.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb={img1}
                >
                  <view slot="footer">
                    <VanButton size="mini">按钮</VanButton>
                    <VanButton size="mini">按钮</VanButton>
                  </view>
                </VanCard>
                <VanCard
                  num="2"
                  tag="标签"
                  price="10.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb={img1}
                >
                  <view slot="footer">
                    <VanButton size="mini">按钮</VanButton>
                    <VanButton size="mini">按钮</VanButton>
                  </view>
                </VanCard>
                <VanCard
                  num="2"
                  tag="标签"
                  price="10.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb={img1}
                >
                  <view slot="footer">
                    <VanButton size="mini">按钮</VanButton>
                    <VanButton size="mini">按钮</VanButton>
                  </view>
                </VanCard>
                <VanCard
                  num="2"
                  tag="标签"
                  price="10.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb={img1}
                >
                  <view slot="footer">
                    <VanButton size="mini">按钮</VanButton>
                    <VanButton size="mini">按钮</VanButton>
                  </view>
                </VanCard>
                <VanCard
                  num="2"
                  tag="标签"
                  price="10.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb={img1}
                >
                  <view slot="footer">
                    <VanButton size="mini">按钮</VanButton>
                    <VanButton size="mini">按钮</VanButton>
                  </view>
                </VanCard>
              </View>
            </VanTab>
            <VanTab title="tab2">
              <View className={style.content}>
                2
            </View>
            </VanTab>
            <VanTab title="tab3">
              <View className={style.content}>
                3
            </View>
            </VanTab>
            <VanTab title="tab3">
              <View className={style.content}>
                3
            </View>
            </VanTab>
            <VanTab title="tab3">
              <View className={style.content}>
                3
            </View>
            </VanTab>
          </VanTabs>
        </View>

      </View>
      <View className={style.down}>
        <VanGoodsAction>
          <VanGoodsActionIcon icon="chat-o" text="客服" />
          <VanGoodsActionIcon icon="cart-o" text="购物车" />
          <VanGoodsActionButton
            text="加入购物车"
            type="warning"
          />
          <VanGoodsActionButton text="立即购买" />
        </VanGoodsAction>
      </View>
    </View>
  );
};
