import React, { Component } from 'react'
import styled from 'styled-components'
import Footer from '../ui/Footer'
import Header from '../ui/Header'
import no from '../../images/icons8-stornieren.svg'
import yes from '../../images/icons8-geprüft.svg'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.section`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 270px auto auto 60px;
  grid-template-columns: 100vw;
`
const QuestText = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
`

const BtnStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`
const Yes = styled.div`
  background-image: url(${yes});
  background-size: cover;
  width: 100px;
  height: 100px;
  margin-right: 20px;
`
const No = styled.div`
  background-image: url(${no});
  background-size: cover;
  width: 100px;
  height: 100px;
  margin-left: 20px;
`

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 150px;
  margin-top: 225px;
  background-image: linear-gradient(#bdd9dc, #fff);
  z-index: -2;
`

const HabitTarget = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100vw;
  z-index: 2;
  margin-left: 2px;
  margin-top: 3px;
`

const GoalNameText = styled.h4`
  text-align: center;
  color: #f7412d;
  margin-bottom: 0;
  margin-top: 51px;
  text-shadow: 2px 1px #e3e3e3;
  font-size: 15px;
`

export default class Query extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Background />
        <HabitTarget>
          <GoalNameText>
            Verliere nie Dein <br />
            Ziel vor Augen!
          </GoalNameText>
        </HabitTarget>
        <QuestText>Warst du Heute erfolgreich?</QuestText>
        <NavLink to="/Profile">
          <BtnStyle>
            <Yes onClick={() => this.props.setResponse(true)} />
            <No onClick={() => this.props.setResponse(false)} />
          </BtnStyle>
        </NavLink>
        <Footer />
      </Wrapper>
    )
  }
}
