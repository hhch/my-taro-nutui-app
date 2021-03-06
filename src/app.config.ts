export default {
  pages: ['pages/index/index', 'pages/user/user', 'pages/search/search', 'pages/login/login', 'pages/searchDetail/searchDetail', 'pages/playList/playList'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  requiredBackgroundModes: ['audio', 'location'],
  tabBar: {
    color: '#000',
    selectedColor: '#e60026',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '้ฆ้กต',
        iconPath: './asset/tab/home.png',
        selectedIconPath: './asset/tab/home_hover.png'
      },
      {
        pagePath: 'pages/user/user',
        text: 'ๆ็',
        iconPath: './asset/tab/user.png',
        selectedIconPath: './asset/tab/user_hover.png'
      }
    ]
  }
}
