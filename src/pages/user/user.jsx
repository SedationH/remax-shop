import React from 'react'
import { View, Image, navigateTo } from 'remax/wechat'
import VanCellGroup from "@vant/weapp/lib/cell-group"
import VanCell from "@vant/weapp/lib/cell"
import VanGrid from "@vant/weapp/lib/grid"
import VanGridItem from "@vant/weapp/lib/grid-item"
import defaultUserImag from '@/assets/images/defaultUserImag.png'
import style from './user.css'

export default () => {

  const gridInfo = [
    {
      icon: 'cart-circle-o',
      title: '待支付',
      sortPara: 'pay'
    }, {
      icon: 'gift-o',
      title: '待收货',
      sortPara: 'delivery'
    }, {
      icon: 'smile-comment-o',
      title: '待评价',
      sortPara: 'comment'
    }, {
      icon: 'cash-back-record',
      title: '售后',
      sortPara: 'after'
    }
  ]
  const handleGridItemClick = (sortPara) => {
    navigateTo({
      url: `/pages/orderDetails/orderDetails?sort=${sortPara}`
    })
  }
  return (
    <>
      <VanCellGroup>
        <VanCell
          center
          is-link
        >
          <View slot="title" className={style.person}>
            <Image src={defaultUserImag} className={style.personImag} />
            <View className={style.personName}>
              请登录
            </View>
          </View>
        </VanCell>
      </VanCellGroup>
      <VanCellGroup>
        <VanCell
          title="我的订单"
          icon="bag-o"
          value="查看全部订单"
          is-link
        />
        <VanGrid
          clickable
        >
          {
            gridInfo.map((grid, index) => (
              <VanGridItem
                text={grid.title}
                icon={grid.icon}
                key={index}
                square
                badge="99+"
                onclick={() => handleGridItemClick(grid.sortPara)}
              />
            ))
          }
        </VanGrid>
        <VanCell
          title="我的地址和电话"
          icon="description"
          is-link
        />
      </VanCellGroup>
    </>
  )
}