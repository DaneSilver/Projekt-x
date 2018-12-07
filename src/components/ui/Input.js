import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const InputStyle = styled.input`
  position: absolute;
  border-color: #d0ebe9;
  border-radius: 30px;
  padding: 10px;
  height: 10px;
  width: 240px;
  font-size: 15px;
  text-align: center;
  margin-top: -1px;
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
          placeholder="Gib Dein Ziel ein"
        />
      </Flex>
    )
  }
}