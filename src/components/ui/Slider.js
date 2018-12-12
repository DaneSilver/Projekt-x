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
  margin-bottom: 30px;
`

const SliderFlex = styled.section`
  width: 250px;
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
              border: '1px solid white',
              transform: 'scale(1.5)'
            }}
            trackStyle={{ background: '#7ED321' }}
            railStyle={{ background: '#676767' }}
            onChange={value => onChange(value)}
          />
        </SliderFlex>
      </FlexStyle>
    )
  }
}
