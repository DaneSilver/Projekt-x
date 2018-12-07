import React, { Component } from 'react'
import styled from 'styled-components'
import ButtonUi from '../ui/ButtonUi'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.section`
  display: block;
`

const NavBar = styled.div`
  display: flex;
  width: 100vw;
  height: 100px;
  align-items: center;
  background-color: deepskyblue;
`

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <NavBar>
          <NavLink to="/Profile">
            <ButtonUi>Profile</ButtonUi>
          </NavLink>

          <NavLink to="/Query">
            <ButtonUi>Query</ButtonUi>
          </NavLink>

          <NavLink to="/Selection">
            <ButtonUi>Selection</ButtonUi>
          </NavLink>
        </NavBar>
      </Wrapper>
    )
  }
}
{
  /* <NavLink to="/Profile">
<Footer />
</NavLink> */
}
