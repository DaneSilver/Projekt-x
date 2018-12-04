import React, { Component } from 'react'
import styled from 'styled-components'

const LivingRoom = styled.div`
  height: 270px;
  width: 100vw;
  margin-top: -30px;
  background-image: url(../../images/wohnzimmerwand.svg);
  background-size: cover;
  z-index: 1;
  position: relative;
`

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 150px;
  background-color: #d8d8d8;
  z-index: 0;
  margin-top: -90px;
`

const HabitTarget = styled.div`
  position: absolute;
  margin-top: -190px;
  margin-left: 140px;
  z-index: 2;
`

const GoalNameText = styled.h4`
  text-align: center;
  color: black;
  margin: 0;
  margin-bottom: 5px;
`

const DailyTimeText = styled.h4`
  text-align: center;
  color: black;
  margin: 0;
`

export default class HeaderSelection extends Component {
  render() {
    const { goalName, dailyTime } = this.props
    return (
      <React.Fragment>
        <LivingRoom />
        <HabitTarget>
          <GoalNameText>{goalName}</GoalNameText>
          <DailyTimeText>{dailyTime} Minuten</DailyTimeText>
        </HabitTarget>
        <Background />
      </React.Fragment>
    )
  }
}
