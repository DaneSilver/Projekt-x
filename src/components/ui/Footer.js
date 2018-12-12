import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import checklist from '../../images/checkdane.svg'
import query from '../../images/querydane.svg'
import plus from '../../images/plus.svg'

const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0;
`

const BtnProfile = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  height: 60px;
  background-color: #009d94;
  margin-bottom: 0;
  border-top: 1px solid #d5d5d5;
  border-right: 5px solid #ffff;
`

const IconProfile = styled.div`
  background-image: url(${checklist});
  height: 32px;
  width: 31px;
  background-size: cover;
  margin-left: 62px;
  margin-bottom: 3px;
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
  background-color: #a1cce0;
  border-radius: 50%;
  border: 5px solid white;
  margin-bottom: 0;
`

const IconPlus = styled.div`
  background-image: url(${plus});
  height: 29px;
  width: 30px;
  background-size: cover;
`

const BtnQuery = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  height: 60px;
  background-color: #009d94;
  border-top: 1px solid #d5d5d5;
`

const IconQuery = styled.div`
  background-image: url(${query});
  height: 33px;
  width: 35px;
  background-size: cover;
  margin-left: 80px;
  margin-top: 1px;
  margin-bottom: 4px;
`

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <NavLink to="/Profile">
          <BtnProfile>
            <IconProfile />
          </BtnProfile>
        </NavLink>

        <NavLink to="/Selection">
          <FlexCircle>
            <ButtonCircle>
              <IconPlus />
            </ButtonCircle>
          </FlexCircle>
        </NavLink>

        <NavLink to="/Query">
          <BtnQuery>
            <IconQuery />
          </BtnQuery>
        </NavLink>
      </Wrapper>
    )
  }
}
