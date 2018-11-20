import React, { Component } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 2em;
`

export const Btn = styled.button`
  font-size: 3em;
`

export default class Button extends Component {
  render() {
    return (
      <Wrapper>
        <Btn>Save</Btn>
      </Wrapper>
    )
  }
}
