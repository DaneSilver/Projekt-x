import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import RCSlider from 'rc-slider'
import 'rc-slider/assets/index.css'

const FlexStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const SliderBg = styled.div`
  position: absolute;
  width: 90vw;
  margin-inline-start: 60px;
  height: 60px;
  background-color: blue;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  z-index: 0;
`

const SliderFlex = styled.div`
  display: flex;
  width: 250px;
  margin-inline-start: 80px;
  z-index: 1;
`

export default class Slider extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  render() {
    const { onChange, value } = this.props

    return (
      <FlexStyle>
        <SliderFlex>
          <RCSlider
            min={5}
            max={60}
            step={5}
            value={value}
            handleStyle={{
              background: 'red',
              border: '2.5px solid white',
              transform: 'scale(2.5)'
            }}
            trackStyle={{ background: 'white' }}
            railStyle={{ background: 'white' }}
            onChange={value => onChange(value)}
          />
        </SliderFlex>
        <SliderBg />
      </FlexStyle>
    )
  }
}
