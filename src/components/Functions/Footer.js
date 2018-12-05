import React, { Component } from 'react'
import styled from 'styled-components'
import ButtonChecklist from '../Functions/ButtonChecklist'
import ButtonPlus from '../Functions/ButtonPlus'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
`

const NavBar = styled.div`
  display: flex;
  width: 390px;
  height: 80px;
  align-items: center;
  background-image: url(../../images/test.svg);
  background-size: cover;
  margin-top: -10px;
  margin-bottom: 0;
  position: fixed;
  z-index: -2;
`

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <NavBar>
            <NavLink to="/Profile">
              <ButtonChecklist />
            </NavLink>
            <ButtonPlus />
          </NavBar>
        </Wrapper>
      </React.Fragment>
    )
  }
}
