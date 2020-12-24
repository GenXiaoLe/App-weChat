import React, { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import { getWindowHeight } from '../../utils/style'
import './index.css'

import Tabs from './components/tabs/index'

import Weight from './weight'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    // console.log(getWindowHeight())

    // const height = getWindowHeight() || '100%'
    return (
      <View className='index'>
        <ScrollView
          style={{ height: '100%' }}>
          <Tabs 
            list={[
              {
                text: '按油相重量计算(g)',
                value: 0
              },
              {
                text: '按油相比例计算(%)',
                value: 1
              }
            ]}
            tabsIndex={0}
            >
            {
              [
                <Weight key={1} />,
                <View key={2}>
                  222
                </View>
              ]
            }
          </Tabs>
          <View className="index__footer">
            <View className="footer__clear footer__btn">清除</View>
            <View className="footer__submit footer__btn">计算</View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
