import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIndexes, AtSearchBar } from 'taro-ui'
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
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClick (item) {
    console.log(item)
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
          tag: 0.139,
          no: 119,
          id: 'A-1'
        },
        {
          name: '阿甘油(摩洛哥坚果油) \n 皂化价: 0.136    ins: 97',
          tag: 0.136,
          no: 97,
          id: 'A-2'
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
          className="index-list"
          list={list}
          onClick={this.onClick.bind(this)}
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
