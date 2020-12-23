import React, { Component } from 'react';
import { View, Text, Image } from '@tarojs/components'
import './index.css'

const MENU_LIST = [
  {

  }
]

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='user-menu'>
        <View className="user__list-item user__login-item">
          <Image className="user__list-icon" src={require('./assets/login-user.png')}></Image>
          <Text className='user-menu__item-text'>登录</Text>
        </View>
        <View className="user__list-item">
          <Image className="user__list-icon" src={require('./assets/soap.png')}></Image>
          <Text className='user-menu__item-text'>我的皂方</Text>
          <Text className='user-menu__item-icon'> &gt; </Text>
        </View>

        <View className="user__list-box">
          <View className="user__list-item user__list-info">
            <Image className="user__list-icon" src={require('./assets/wechat.png')}></Image>
            <Text className='user-menu__item-text'>联系开发人员</Text>
            <Text className='user-menu__item-icon'> &gt; </Text>
          </View>
          <View className="user__list-item user__list-info">
            <Image className="user__list-icon" src={require('./assets/about.png')}></Image>
            <Text className='user-menu__item-text'>关于爱尚手工皂</Text>
            <Text className='user-menu__item-icon'> &gt; </Text>
          </View>
        </View>
      </View>
    )
  }
}