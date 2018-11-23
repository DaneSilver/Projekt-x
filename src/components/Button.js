import React, { Component } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 2em;
`

export const Btn = styled.button`
  border-radius: 5px 10px 5px 10px;
  width: 200px;
  height: 50px;
`
export const Font = styled.p`
  font-size: 25px;
  border-radius: 10px;
`

export default class Button extends Component {
  render() {
    return (
      <Wrapper>
        <Btn>
          <Font>Save</Font>
        </Btn>
      </Wrapper>
    )
  }
}
