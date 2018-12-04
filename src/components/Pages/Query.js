import React, { Component } from 'react'
import ButtonLinkQuery from '../Functions/ButtonLinkQuery'
import ButtonYes from '../Functions/ButtonYes'
import ButtonNo from '../Functions/ButtonNo'
import HeaderQuery from '../Functions/HeaderQuery'
import styled from 'styled-components'

const BtnStyle = styled.section`
  margin-top: 100px;
`

export default class Query extends Component {
  render() {
    return (
      <div>
        <HeaderQuery />
        <BtnStyle>
          <ButtonLinkQuery />
          <ButtonYes />
          <ButtonNo />
        </BtnStyle>
      </div>
    )
  }
}
