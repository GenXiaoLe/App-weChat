import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

import './index.css'

interface LItem {
  text: string;
  value: number
}

interface IProps {
  list: LItem[];
  tabsIndex: number;
}

export default class Index extends Component<IProps> {

  constructor(props) {
    super(props)

    const { list, tabsIndex } = props

    this.state = {
      list,
      tabsIndex: tabsIndex || 0
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log(this.props)
    const { list, tabsIndex } = this.state

    const childends:[] = this.props.children
    return (
      <View className='tabs'>
        <View className='tabs__box'>
        {
          list.map((item:LItem) => {
            return <View className={item.value === tabsIndex ? 'selected tabs__item' : 'tabs__item'} key={item.value} style={{width: (100 / list.length) + '%'}}>
              <Text>{item.text}</Text>
              <View className="tabs__item-bottom"></View>
              <View className="tabs__item-right"></View>
            </View>
          })
        }
        </View>
        {childends[tabsIndex]}
      </View>
    )
  }
}
