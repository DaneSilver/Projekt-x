import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0;
`

const BtnProfile = styled.div`
  width: 50vw;
  height: 60px;
  background-color: deeppink;
  border-right: 5px solid white;
  margin-bottom: 0;
`

const FlexCircle = styled.section`
  display: flex;
  justify-content: center;
`

const ButtonCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: -31px;
  margin-bottom: 100px;
  height: 60px;
  width: 60px;
  background-color: blue;
  border-radius: 50%;
  border: 5px solid white;
  margin-bottom: 0;
`

const BtnQuery = styled.div`
  width: 50vw;
  height: 60px;
  background-color: gray;
  margin-bottom: 0;
`

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <NavLink to="/Profile">
          <BtnProfile>Profile</BtnProfile>
        </NavLink>

        <NavLink to="/Selection">
          <FlexCircle>
            <ButtonCircle>+</ButtonCircle>
          </FlexCircle>
        </NavLink>

        <NavLink to="/Query">
          <BtnQuery>Query</BtnQuery>
        </NavLink>
      </Wrapper>
    )
  }
}
