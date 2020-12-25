import React, { Component } from 'react'
import { View, Text, Image, Checkbox, Input, Textarea } from '@tarojs/components'
import './index.css'

interface IProps {
  type: number
}

interface IState {
  type: number
}


export default class Index extends Component<IProps, IState> {
  constructor(props) {
    super(props)

    const { type } = props

    this.state = {
      type
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { type } = this.state
    return (
      <View className='weight'>
        <View className="weight__item">
          {
            type === 1 ?
            <View className="weight__item--content">
              <View className="weight__item--content-item">
                <View className="weight__item--content-left">
                  <Text className="weight__item--header-text">油相总重量</Text>
                </View>
                <View className="weight__item--content-right">
                  <Input className="weight__item--content-input" style="width: 30%" type='text' focus />
                  <Text className="weight__item--header-text">g</Text>
                </View>
              </View>
            </View>
            : null
          }
          <View className="weight__item--header">
            <View className="weight__item--header-left">
              <View className="weight__item--header-align"></View>
              <Text className="weight__item--header-text">油相</Text>
            </View>
            <Image className="weight__item--header-right" src={require('./assets/add-icon.png')}></Image>
          </View>
        </View>

        <View className="weight__item">
          <View className="weight__item--header">
            <View className="weight__item--header-left">
              <View className="weight__item--header-align"></View>
              <Text className="weight__item--header-text">超脂/添加</Text>
            </View>
            <Image className="weight__item--header-right" src={require('./assets/add-icon.png')}></Image>
          </View>
          <View className="weight__item--content">
            <View className="weight__item--content-item">
              <View className="weight__item--content-left">
                <Image className="weight__item--content-icon" src={require('./assets/delete-icon.png')}></Image>
                <Input className="weight__item--content-input" type='text' placeholder='添加物名称' focus/>
              </View>
              <View className="weight__item--content-right">
                <Input className="weight__item--content-input" style="width: 30%" type='text' focus />
                <Text className="weight__item--header-text">%</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="weight__item">
          <View className="weight__item--header">
            <View className="weight__item--header-left">
              <View className="weight__item--header-align"></View>
              <Text className="weight__item--header-text">计算固体皂</Text>
            </View>
            <View className="weight__item--header-right" style="margin-top: 0;">
              <Checkbox value='选中' checked></Checkbox>
            </View>
          </View>
          <View className="weight__item--content">
            <View className="weight__item--content-item">
              <View className="weight__item--content-left" style="width: 70%">
                <Text className="weight__item--header-text">固体皂用碱(NaOH)纯度</Text>
              </View>
              <View className="weight__item--content-right">
                <Input className="weight__item--content-input" style="width: 30%" type='text' focus />
                <Text className="weight__item--header-text">%</Text>
              </View>
            </View>
            <View className="weight__item--content-item">
              <View className="weight__item--content-left">
                <Text className="weight__item--header-text">水相</Text>
              </View>
              <View className="weight__item--content-right">
                <Input className="weight__item--content-input" style="width: 30%" type='text' focus />
                <Text className="weight__item--header-text">倍</Text>
              </View>
            </View>
            <View className="weight__item--content-item">
              <View className="weight__item--content-left">
                <Text className="weight__item--header-text">减碱</Text>
              </View>
              <View className="weight__item--content-right">
                <Input className="weight__item--content-input" style="width: 30%" type='text' focus />
                <Text className="weight__item--header-text">%</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="weight__item">
          <View className="weight__item--header">
            <View className="weight__item--header-left">
              <View className="weight__item--header-align"></View>
              <Text className="weight__item--header-text">计算液体皂</Text>
            </View>
            <View className="weight__item--header-right" style="margin-top: 0;">
              <Checkbox value='选中' checked></Checkbox>
            </View>
          </View>
          <View className="weight__item--content">
            <View className="weight__item--content-item">
              <View className="weight__item--content-left" style="width: 70%">
                <Text className="weight__item--header-text">固体皂用碱(NaOH)纯度</Text>
              </View>
              <View className="weight__item--content-right">
                <Input className="weight__item--content-input" style="width: 30%" type='text' focus />
                <Text className="weight__item--header-text">%</Text>
              </View>
            </View>
            <View className="weight__item--content-item">
              <View className="weight__item--content-left">
                <Text className="weight__item--header-text">水相</Text>
              </View>
              <View className="weight__item--content-right">
                <Input className="weight__item--content-input" style="width: 30%" type='text' focus />
                <Text className="weight__item--header-text">倍</Text>
              </View>
            </View>
            <View className="weight__item--content-item">
              <View className="weight__item--content-left">
                <Text className="weight__item--header-text">减碱</Text>
              </View>
              <View className="weight__item--content-right">
                <Input className="weight__item--content-input" style="width: 30%" type='text' focus />
                <Text className="weight__item--header-text">%</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="weight__item">
          <View className="weight__item--header">
            <View className="weight__item--header-left">
              <View className="weight__item--header-align"></View>
              <Text className="weight__item--header-text">其他记录</Text>
            </View>
          </View>
          <View className="weight__item--content">
            <View className="weight__item--content-item">
              <Textarea placeholder="记录下其他信息吧！最多不超过100字哦~" className="weight__item--content-textarea" autoHeight/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
