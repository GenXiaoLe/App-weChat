import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIndexes, AtSearchBar } from 'taro-ui'
import Taro from '@tarojs/taro'
import './index.css'

interface IProps {

}

interface IState {
  searchValue: string
}

export default class Oil extends Component<IProps, IState> {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: ''
    }

    this.searchClickHandle = this.searchClickHandle.bind(this)
    this.searchOnChagneHandle = this.searchOnChagneHandle.bind(this)
    this.indexClickHandle = this.indexClickHandle.bind(this)
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  indexClickHandle (item) {
    let pages = Taro.getCurrentPages() // 获取当前的页面栈 
    let prevPage = pages[pages.length - 2] //  获取上一页面
    prevPage.setData({ //设置上一个页面的值
      holder: item
    })
    Taro.navigateBack({
      delta: 1
    })
  }

  searchOnChagneHandle (val: string) {
    this.setState({
      searchValue: val
    })
  }

  searchClickHandle () {
    
  }

  render () {
    const list = [{
      title: 'A',
      key: 'A',
      items: [
        {
          name: '澳洲胡桃油 | 夏威夷坚果油 \n皂化价: 0.139    ins: 119',
          text: '澳洲胡桃油 | 夏威夷坚果油',
          percent: '0.139',
          no: 119,
          id: '1'
        },
        {
          name: '阿甘油(摩洛哥坚果油) \n 皂化价: 0.136    ins: 97',
          text: '阿甘油(摩洛哥坚果油)',
          percent: '0.136',
          no: 97,
          id: '2'
        }]
      },
      {
        title: 'B',
        key: 'B',
        items: [
          {
            'name': '北京'
          },
          {
            'name': '保定'
          }]
      }
    ]

    const { searchValue } = this.state
    return (
      <View className='oil'>
        <AtIndexes
          isVibrate={false}
          className="index-list"
          list={list}
          topKey="索引"
          onClick={this.indexClickHandle}
        >
          <View>
            <AtSearchBar
              value={searchValue}
              onChange={this.searchOnChagneHandle}
              onActionClick={this.searchClickHandle}
            />
          </View>
        </AtIndexes>
      </View>
    )
  }
}
