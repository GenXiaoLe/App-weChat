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
  isFixed: boolean
}

export default class Index extends Component<IProps> {

  constructor(props) {
    super(props)

    const { list, tabsIndex, isFixed } = props

    this.state = {
      list,
      tabsIndex: tabsIndex || 0,
      isFixed
    }
  }

  tabsClick (tabsIndex: number) {
    this.setState({
      tabsIndex
    })
  }

  render () {
    console.log(this.props)
    const { list, tabsIndex, isFixed } = this.state
    const headerName = isFixed ? 'fixed tabs__box' : 'tabs__box';
    const contentName = isFixed ? 'tabs__content--fixed' : '';

    const childends = this.props.children as []
    return (
      <View className='tabs'>
        <View className={headerName}>
          {
            list.map((item:LItem) => {
              return <View onClick={() => { this.tabsClick(item.value) }} className={item.value === tabsIndex ? 'selected tabs__item' : 'tabs__item'} key={item.value} style={{width: (100 / list.length) + '%'}}>
                <Text>{item.text}</Text>
                <View className="tabs__item-bottom"></View>
                <View className="tabs__item-right"></View>
              </View>
            })
          }
        </View>
        <View className={contentName}>
          {childends[tabsIndex]}
        </View>
      </View>
    )
  }
}
