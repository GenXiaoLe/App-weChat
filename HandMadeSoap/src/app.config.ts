export default {
  pages: [
    'pages/index/index',
    'pages/user/index',
    'pages/oilList/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#a9b7b7',
    selectedColor: '#11cd6e',
    borderStyle: 'black',
    list: [
      {
        selectedIconPath: "images/count-bg.png",  
        iconPath: "images/count.png",  
        pagePath: "pages/index/index",  
        text: "计算" 
      },
      {
        selectedIconPath: "images/user-bg.png",  
        iconPath: "images/user.png",  
        pagePath: "pages/user/index",  
        text: "我的" 
      }
    ]
  }
}
