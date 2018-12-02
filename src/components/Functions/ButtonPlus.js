import React, { Component } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  margin: 1em;
`

export const Btn = styled.button`
  padding: 10px;
  border-radius: 10px;
  width: 300px;
  margin-bottom: 0;
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
