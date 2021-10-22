export default {
  pages: ['pages/index/index', 'pages/user/user', 'pages/search/search'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#000',
    selectedColor: '#184efa',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
        // iconPath: '',
        // selectedIconPath: ''
      },
      {
        pagePath: 'pages/user/user',
        text: '我的'
        // iconPath: '',
        // selectedIconPath: ''
      }
    ]
  }
}
