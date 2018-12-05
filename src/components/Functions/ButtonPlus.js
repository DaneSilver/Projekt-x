import React, { Component } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  justify-content: center;
  align-items: center;
`

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-left: 3px;
  margin-bottom: 100px;
  background-color: burlywood;
`

export const Font = styled.p`
  font-size: 16px;
`

export default class ButtonPlus extends Component {
  render() {
    return (
      <Wrapper>
        <Btn>
          <Font>+</Font>
        </Btn>
      </Wrapper>
    )
  }
}
