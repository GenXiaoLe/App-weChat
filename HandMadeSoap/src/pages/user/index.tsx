import React, { Component } from 'react';
import { View, ScrollView } from '@tarojs/components'
import { getWindowHeight } from '../../utils/style'
import './index.css'

import Menu from './menu'

export default class User extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='user'>
        <ScrollView
          style={{ height: getWindowHeight() }}>
          <Menu />
        </ScrollView>
      </View>
    )
  }
}