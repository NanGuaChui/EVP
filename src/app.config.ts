export default defineAppConfig({
  pages: [
    'pages/login',
    'pages/index/index',
    'pages/index/list/index',
    'pages/index/detail/index',
    'pages/index/rankings/index',
    'pages/user/index',
  ],
  window: {
    navigationStyle: 'custom',
    backgroundTextStyle: 'light',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#3E4248',
    backgroundColor: '#fff',
    selectedColor: '#85bc27',
    list: [
      {
        text: '首页',
        iconPath: './assets/images/home.png',
        selectedIconPath: './assets/images/home_selected.png',
        pagePath: 'pages/index/index',
      },
      {
        text: '用户中心',
        iconPath: './assets/images/user.png',
        selectedIconPath: './assets/images/user_selected.png',
        pagePath: 'pages/user/index',
      },
    ],
  },
});
