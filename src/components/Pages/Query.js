import React, { Component } from 'react'
import ButtonLinkQuery from '../Functions/ButtonChecklist'
//import ButtonYes from '../Functions/ButtonYes'
import ButtonNo from '../Functions/ButtonNo'
import HeaderQuery from '../Functions/HeaderQuery'
import styled from 'styled-components'
import Footer from '../Functions/Footer'

const BtnStyle = styled.section`
  margin-top: 100px;
`
const Button = styled.button`
  padding: 15px;
  border-radius: 50px;
  border: 0.5px solid #00978e;
  background-color: #cfebe9;
  width: 180px;
  font-size: 15px;
`

export default class Query extends Component {
  render() {
    return (
      <div>
        <HeaderQuery />
        <BtnStyle>
          <ButtonLinkQuery />
          <Button onClick={() => this.props.setResponse(true)}>Ja</Button>
          <Button onClick={() => this.props.setResponse(false)}>Nein</Button>
        </BtnStyle>
        <Footer />
      </div>
    )
  }
}
