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
        <View className="user__list-item">
          <Image className="user__list-icon" src={require('./assets/user.png')}></Image>
          <Text className='user-menu__item-text'>登录</Text>
        </View>
        <View className="user__list-item">
          <Image className="user__list-icon" src={require('./assets/user.png')}></Image>
          <Text className='user-menu__item-text'>我的皂方</Text>
        </View>
      </View>
    )
  }
}