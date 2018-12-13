import React, { Component } from 'react'
import styled from 'styled-components'
import image from '../../images/wohnzimmerwand.svg'

const LivingRoom = styled.div`
  height: 270px;
  width: 100%;
  margin-top: -30px;
  background-image: url(${image});
  background-size: cover;
  z-index: -1;
  position: relative;
  @media only screen and (min-width: 376px) {
    background-position-y: bottom;
    height: 400px;
    position: absolute;
  }
`

export default class HeaderSelection extends Component {
  render() {
    return (
      <React.Fragment>
        <LivingRoom />
      </React.Fragment>
    )
  }
}
