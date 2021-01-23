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
    console.log(item)
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
            name: '白油(动物) \n 皂化价: 0.136    ins: 115',
            text: '白油(动物)',
            percent: '0.136',
            no: 115,
            id: '3'
          },
          {
            name: '白芒花籽油 \n 皂化价: 0.12    ins: 77',
            text: '白芒花籽油',
            percent: '0.12',
            no: 77,
            id: '4'
          },
          {
            name: '蓖麻油 \n 皂化价: 0.1286    ins: 95',
            text: '蓖麻油',
            percent: '0.1286',
            no: 95,
            id: '5'
          }]
      },
      {
        title: 'C',
        key: 'C',
        items: [
          {
            name: '菜籽油 \n 皂化价: 0.124    ins: 56',
            text: '菜籽油',
            percent: '0.124',
            no: 56,
            id: '6'
          }]
      },
      {
        title: 'D',
        key: 'D',
        items: [
          {
            name: '大豆油 \n 皂化价: 0.137    ins: 61',
            text: '大豆油',
            percent: '0.137',
            no: 61,
            id: '7'
          },
          {
            name: '大麻籽油 \n 皂化价: 0.137    ins: 39',
            text: '白芒花籽油',
            percent: '0.137',
            no: 39,
            id: '8'
          },
          {
            name: '大麻籽脂 \n 皂化价: 0.136    ins: 115',
            text: '大麻籽脂',
            percent: '0.136',
            no: 115,
            id: '9'
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
