import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import RCSlider from 'rc-slider'
import 'rc-slider/assets/index.css'

const Labelstyle = styled.label`
  display: flex;
  margin-bottom: 1em;
  background: white;
  border: 2px solid #a020f0;
  border-radius: 10px;
  height: 30px;
  align-items: center;
  justify-content: center;
`

const FlexStyle = styled.div`
  display: flex;
  flex-direction: column;
`

export default class Slider extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  render() {
    const { onChange, value } = this.props

    return (
      <FlexStyle>
        <Labelstyle>Wie viele Minuten pro Tag?</Labelstyle>

        <RCSlider
          min={5}
          max={60}
          step={5}
          value={value}
          handleStyle={{
            background: 'white',
            boxShadow: '0.5px 0.5px 2px gray',
            border: '1px solid purple',
            transform: 'scale(1.3)'
          }}
          trackStyle={{ background: 'deeppink' }}
          railStyle={{ background: 'gray' }}
          onChange={value => onChange(value)}
        />
      </FlexStyle>
    )
  }
}
