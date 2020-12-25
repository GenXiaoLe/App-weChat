import React, { Component } from 'react'
import { View, Text, ScrollView, Button } from '@tarojs/components'
import { getWindowHeight } from '../../utils/style'
import './index.css'

import Tabs from './components/tabs/index'

import Weight from './weight'

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btn: [
        {
          text: '页面主操作 Normal',
          size: 'default',
          type: 'primary'
        }
      ]
    }
  }

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
          scroll-y={true}
          style={{ height: 'calc(100% - 45px)' }}>
          <Tabs
            isFixed={true}
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
                <Weight key={1} type={0} />,
                <Weight key={2} type={1} />
              ]
            }
          </Tabs>
        </ScrollView>
        <View className="index__footer">
          <View className="footer__clear footer__btn">
            <Button
            size='mini'
            type="warn"
            >
              清除
            </Button>
          </View>
          <View className="footer__submit footer__btn">
            <Button 
            size='mini'
            type="primary"
            >
              计算
            </Button>
          </View>
        </View>
      </View>
    )
  }
}
