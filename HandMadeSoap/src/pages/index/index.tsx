import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.css'

import Tabs from './components/tabs/index'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
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
              <View key={1}>
                111
              </View>,
              <View key={2}>
                222
              </View>
            ]
          }
        </Tabs>
      </View>
    )
  }
}
