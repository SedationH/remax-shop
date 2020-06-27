import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import VanSidebar from '@vant/weapp/lib/sidebar'
import VanSidebarItem from '@vant/weapp/lib/sidebar-item'
import VanTab from '@vant/weapp/lib/tab'
import VanTabs from '@vant/weapp/lib/tabs'
import style from './shop.css'

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
        sticky
      >
        <VanTabs>
          <VanTab title="tab1">
            <View className={style.content}>
              美国政府26日宣布，将对参与削弱香港自治的现任及前任中共官员实施签证限制，但声明未提及具体人名。中国驻美大使馆发言人警告，中方将对美国采取必要的反制措施。

              该制裁声明宣布后两天中国全国人大常委会将再次开会审议备受争议的香港《国安法》。为期三天的会议是两周内人大常委的第二次会议，据多方预测，会议期间将很有可能通过这部法律并决定其立刻生效。

              根据目前官方公布法律草案的主要内容，北京将在香港设立维护国家安全公署，特别行政区政府需要设立维护国家安全委员会。 这些举措引起广泛担忧，有评论认为一旦港区《国安法》实施，香港的“一国两制”将不复存在，香港会和中国任何一个城市无异。

              特朗普：取消香港特殊贸易地位、制裁中港官员、退出世卫组织
              港版《国安法》草案：北京将设驻港国安公署，对“极少数”案件行使管辖权
              香港《国安法》草案细节引发的五大争议
              为什么制裁
              美国国务卿蓬佩奥周五（26日）发表声明指，针对被认为损害香港高度自治及香港人权、基本自由的现任及前任中国共产党官员，美国将对他们及其家人实施签证限制。

              “特朗普总统曾承诺惩罚要对损害香港自由负责的中国共产党官员。今天，我们对此作出行动，”蓬佩奥在声明中称。

              然而，声明未提及任何具体人名，以及他们将面临何种美国签证限制。

              上月，美国认定香港不再享有足够自治，总统特朗普宣布逐渐取消美国给予香港的特殊待遇，或将终止香港贸易关税优惠、科技准入、香港护照持有者赴美旅行免签证等待遇。

              但美方目前仍未宣布移除香港特殊待遇的具体举措和流程。

              图片版权AFP
              可能的制裁清单
              美国彭博社引述美国国务院官员称，这是美国制裁措施的第一步，如果中国继续损害香港，更多制裁措施将陆续到来。该消息出自彭博社的评论专栏，作者引述一位不具名的国务院官员称，目前受影响的中共官员是个位数，即不多于10人。

              美国共和党国会议员曾在本月初提出过可能制裁的中共官员清单。根据美国共和党研究委员会6月10日发表的国家安全战略报告，建议依据《全球马格尼茨基人权法案》采用“史上最严厉的制裁措施”，制裁侵犯香港、新疆、西藏人权的中共高层官员。
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
  );
};
