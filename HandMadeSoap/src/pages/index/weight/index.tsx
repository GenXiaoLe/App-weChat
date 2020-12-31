import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Checkbox, Input, Textarea, CheckboxGroup } from '@tarojs/components'
import './index.css'

interface IProps {
  type: number,
  holder: any[]
}

interface IState {
  type: number,
  fatList: FatInter[],
  isCountSolidSopa: boolean,
  isCountLiquidSopa: boolean,
  OilList: OilInter[],
}

interface FatInter {
  name: string,
  percent: string
}

interface OilInter {
  name?: string,
  percent?: string,
  wieght?: string,
  no?: number,
  id?: string,
  text?: string,
}


export default class Index extends Component<IProps, IState> {
  constructor(props) {
    super(props)

    const { type, holder = [] } = props

    this.state = {
      type,
      fatList: [],
      isCountSolidSopa: false,
      isCountLiquidSopa: false,
      OilList: holder
    }

    this.fatListAddHandle = this.fatListAddHandle.bind(this)
    this.fatSubHandle = this.fatSubHandle.bind(this)
    this.countSopaHandle = this.countSopaHandle.bind(this)
    this.addOilHandle = this.addOilHandle.bind(this)
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
    
  }

  componentDidHide () { }

  addOilHandle () {
    Taro.navigateTo({
		  url: '/pages/oilList/index'
    })
  }

  fatListAddHandle () {
    const { fatList } = this.state
    const fatItem: FatInter = {
      name: '',
      percent: ''
    }

    fatList.push(fatItem)

    this.setState({
      fatList
    })
  }

  fatSubHandle (item: FatInter, index: number) {
    const { fatList } = this.state
    fatList.splice(index, 1)
    this.setState({
      fatList
    })
  }

  countSopaHandle (event: any, type: number) {
    console.log(event)
    const { detail } = event
    const { value } = detail
    let isCountSopa: boolean = false

    const sopaCheck = (value as []).find(item => item === '1')

    if (sopaCheck) {
      isCountSopa = true
    }

    if (type === 1) {
      this.setState({
        isCountSolidSopa: isCountSopa
      })
    } else {
      this.setState({
        isCountLiquidSopa: isCountSopa
      })
    }
  }

  render () {
    const { type, fatList, OilList, isCountSolidSopa, isCountLiquidSopa } = this.state
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
                  <Input className="weight__item--content-input" style="width: 30%" type='text' />
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
            <Image onClick={this.addOilHandle} className="weight__item--header-right" src={require('./assets/add-icon.png')}></Image>
          </View>
          {
            OilList.map((item: OilInter, index) => {
              return (<View className="weight__item--content" key={index}>
                <View className="weight__item--content-item">
                  <View className="weight__item--content-left" style="width: 70%">
                    <Image className="weight__item--content-icon" src={require('./assets/delete-icon.png')}></Image>
                    <View style="margin-left: 10px;">
                      <Text className="weight__item--header-text">{item.text}</Text>
                      <View style="line-height: 10px;">
                        <Text className="weight__item--header-text small">皂化价：{item.percent}</Text>
                      </View>
                    </View>
                  </View>
                  <View className="weight__item--content-right">
                    <Input value={item.wieght} className="weight__item--content-input" style="width: 30%" type='text' />
                    <Text className="weight__item--header-text">g</Text>
                  </View>
                </View>
              </View>)
            })
          }
        </View>

        <View className="weight__item">
          <View className="weight__item--header">
            <View className="weight__item--header-left">
              <View className="weight__item--header-align"></View>
              <Text className="weight__item--header-text">超脂/添加</Text>
            </View>
            <Image onClick={this.fatListAddHandle} className="weight__item--header-right" src={require('./assets/add-icon.png')}></Image>
          </View>
          <View className="weight__item--content">
            {fatList.map((item: FatInter, index) => {
              return (<View className="weight__item--content-item" key={index}>
                <View className="weight__item--content-left">
                  <Image onClick={() => this.fatSubHandle(item, index)} className="weight__item--content-icon" src={require('./assets/delete-icon.png')}></Image>
                  <Input value={item.name} className="weight__item--content-input" type='text' placeholder='添加物名称' focus/>
                </View>
                <View className="weight__item--content-right">
                  <Input value={item.percent} className="weight__item--content-input" style="width: 30%" type='text' />
                  <Text className="weight__item--header-text">%</Text>
                </View>
              </View>)
              })}
          </View>
        </View>

        <View className="weight__item">
          <View className="weight__item--header">
            <View className="weight__item--header-left">
              <View className="weight__item--header-align"></View>
              <Text className="weight__item--header-text">计算固体皂</Text>
            </View>
            <View className="weight__item--header-right" style="margin-top: 0;">
              <CheckboxGroup  onChange={(event) => { this.countSopaHandle(event, 1) }}>
                <Checkbox value={"1"} checked={isCountSolidSopa}></Checkbox>
              </CheckboxGroup>
            </View>
          </View>
          { isCountSolidSopa ? <View className="weight__item--content">
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
                <Input className="weight__item--content-input" style="width: 30%" type='text' />
                <Text className="weight__item--header-text">倍</Text>
              </View>
            </View>
            <View className="weight__item--content-item">
              <View className="weight__item--content-left">
                <Text className="weight__item--header-text">减碱</Text>
              </View>
              <View className="weight__item--content-right">
                <Input className="weight__item--content-input" style="width: 30%" type='text' />
                <Text className="weight__item--header-text">%</Text>
              </View>
            </View>
          </View> : null }
        </View>

        <View className="weight__item">
          <View className="weight__item--header">
            <View className="weight__item--header-left">
              <View className="weight__item--header-align"></View>
              <Text className="weight__item--header-text">计算液体皂</Text>
            </View>
            <View className="weight__item--header-right" style="margin-top: 0;">
              <CheckboxGroup  onChange={(event) => { this.countSopaHandle(event, 2) }}>
                <Checkbox value={'1'} checked={isCountLiquidSopa}></Checkbox>
              </CheckboxGroup>
            </View>
          </View>
          { isCountLiquidSopa ? <View className="weight__item--content">
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
                <Input className="weight__item--content-input" style="width: 30%" type='text' />
                <Text className="weight__item--header-text">倍</Text>
              </View>
            </View>
            <View className="weight__item--content-item">
              <View className="weight__item--content-left">
                <Text className="weight__item--header-text">减碱</Text>
              </View>
              <View className="weight__item--content-right">
                <Input className="weight__item--content-input" style="width: 30%" type='text' />
                <Text className="weight__item--header-text">%</Text>
              </View>
            </View>
          </View> : null }
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
