import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Labelstyle = styled.label`
  background: deeppink;
  margin-bottom: 1em;
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
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  render() {
    const { onChange } = this.props

    return (
      <FlexStyle>
        <Labelstyle>Mind. Zeit eingeben</Labelstyle>
        <Input
          type="range"
          // list="tickmarks"
          min="5"
          max="60"
          step="5"
          onChange={event => onChange(event.target.value)}
        />
      </FlexStyle>
    )
  }
}
