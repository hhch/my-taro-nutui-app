export default {
  pages: ['pages/index/index', 'pages/user/user', 'pages/search/search', 'pages/login/login'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#000',
    selectedColor: '#e60026',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './asset/tab/home.png',
        selectedIconPath: './asset/tab/home_hover.png'
      },
      {
        pagePath: 'pages/user/user',
        text: '我的',
        iconPath: './asset/tab/user.png',
        selectedIconPath: './asset/tab/user_hover.png'
      }
    ]
  }
}
