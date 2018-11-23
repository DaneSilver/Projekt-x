import React, { Component } from 'react'
import styled from 'styled-components'

const Labelstyle = styled.label`
  background: deeppink;
`

const FlexStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  ::-webkit-slider-runnable-track {
    background: green;
    width: 100em;
    border-radius: 15px;
  }
`

export default class Slider extends Component {
  render() {
    const { onChange } = this.props
    const min = ''
    return (
      <FlexStyle>
        <Labelstyle>Mind. Zeit eingeben</Labelstyle>
        <Input
          type="range"
          // list="tickmarks"
          min={min}
          max="60"
          step="5"
          onChange={event => onChange(event.target.value)}
        />
      </FlexStyle>
    )
  }
}
