import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const InputStyle = styled.input`
  border: 5 solid #a020f0;
  background-color: white;
  border-radius: 30px;
  padding-left: 10px;
  color: black;
  height: 30px;
  width: 240px;
  font-size: 15px;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  render() {
    const { onChange } = this.props

    return (
      <Flex>
        <InputStyle
          onChange={event => onChange(event.target.value)}
          placeholder="  Was ist Dein Ziel?"
        />
      </Flex>
    )
  }
}
