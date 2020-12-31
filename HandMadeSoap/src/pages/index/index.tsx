import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text, ScrollView, Button } from '@tarojs/components'
// import { getWindowHeight } from '../../utils/style'
import './index.css'

import Tabs from './components/tabs/index'

import Weight from './weight'

interface IBtn {
  text: string,
  size: string,
  type: string
}

interface IProps {}

interface IState {
  holder: any[],
  btn: IBtn[]
}

export default class Index extends Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      btn: [
        {
          text: '页面主操作 Normal',
          size: 'default',
          type: 'primary'
        }
      ],
      holder: []
    }

    // this.clear = this.clear.bind(this)
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    const { holder } = this.state
    let pages = Taro.getCurrentPages();
    let currPage = pages[pages.length - 1]; // 获取当前页面
    if (currPage.__data__.holder) { // 获取值
      holder.push(currPage.__data__.holder)
      this.setState({ holder })
    } 
  }

  componentDidHide () { }

  clear () {
    
  }

  render () {
    // console.log(getWindowHeight())

    // const height = getWindowHeight() || '100%'

    const { holder } = this.state
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
                <Weight holder={holder} key={1} type={0} />,
                <Weight holder={holder} key={2} type={1} />
              ]
            }
          </Tabs>
        </ScrollView>
        <View className="index__footer">
          <View className="footer__clear footer__btn">
            <Button
            size='mini'
            type="warn"
            onClick={this.clear}
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
