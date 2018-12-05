import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section``

const BtnChecklistIcon = styled.object`
  position: absolute;
  background-image: url(../../images/check.svg);
  background-size: cover;
  height: 30px;
  width: 36px;
  margin-left: 80px;
`

const BtnText = styled.p`
  color: white;
  margin-top: 10px;
  margin-left: 60px;
`

export default class ButtonChecklist extends Component {
  render() {
    return (
      <Wrapper>
        <BtnChecklistIcon />
        <BtnText>Checkliste</BtnText>
      </Wrapper>
    )
  }
}
