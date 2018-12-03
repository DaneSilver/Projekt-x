import React, { Component } from 'react'
import styled from 'styled-components'

export const Btn = styled.button`
  padding: 15px;
  border-radius: 50px;
  border: 0.5px solid #00978e;
  background-color: #cfebe9;
  width: 250px;
  font-size: 15px;
  margin-bottom: 20px;
`

export const Font = styled.p`
  font-size: 16px;
`

export default class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <Btn>Los geht's!</Btn>
      </React.Fragment>
    )
  }
}
