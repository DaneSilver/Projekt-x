import React, { Component } from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  padding: 15px;
  border-radius: 50px;
  border: 0.5px solid #00978e;
  background-color: #cfebe9;
  width: 180px;
  font-size: 15px;
`

export default class ButtonYes extends Component {
  render() {
    return (
      <div>
        <Btn>Ja</Btn>
      </div>
    )
  }
}
