module.exports = {
  pages: [
    'pages/index/index',
    'pages/cart/cart',
    'pages/user/user',
    'pages/orderDetails/orderDetails',
    'pages/shop/shop',
    'pages/login/login'
  ],
  window: {
    navigationBarTitleText: 'Shop',
    navigationBarBackgroundColor: '#000'
  },
  tabBar: {
    borderStyle: "white",
    selectedColor: "green",
    color: "#000",
    list: [{
      pagePath: "pages/index/index",
      text: "首页",
      iconPath: '/images/index.png',
      selectedIconPath: '/images/index@selected.png'
    }, {
      pagePath: "pages/cart/cart",
      text: "购物车",
      selectedIconPath: '/images/cart@selected.png',
      iconPath: '/images/cart.png',
    }, {
      pagePath: 'pages/user/user',
      text: "个人",
      iconPath: '/images/my.png',
      selectedIconPath: '/images/my@selected.png',
    }]
  },
};