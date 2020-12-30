# App-weChat
基于Taro框架开发，手工香皂相关的微信小程序


### 问题、踩坑随手记

- 配置的位置
项目-config文件夹-index.js

- Taro-ui引入使用报错
```shell
./node_modules/taro-ui/dist/weapp/index.ts
Module not found: Can't resolve './style/index.scss' in 'xxxxxxx'
```
  - 解决办法：安装taro-ui版本，taro ui2.+版本跟目前的taro3.+版本不兼容
  ```shell
    npm install taro-ui@3.0.0-alpha.3
  ```

- 路由跳转使用，一直报错
> 跳转地址前面一定要加 /
  ```
    // app.confing.ts
    pages: [
      'pages/oilList/index',
    ],

    // index.ts
    import Taro from '@tarojs/taro'

    // ...

    Taro.navigateTo({
		  url: '/pages/oilList/index'
    })
  ```
