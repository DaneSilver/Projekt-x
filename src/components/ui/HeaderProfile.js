import React, { Component } from 'react'
import styled from 'styled-components'
import image from '../../images/wohnzimmerwand.svg'

const LivingRoom = styled.div`
  height: 270px;
  width: 100vw;
  margin-top: -38px;
  background-image: url(${image});
  background-size: cover;
  z-index: 1;
  position: relative;
`

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 150px;
  background-image: linear-gradient(#d8d8d8, white);
  z-index: 0;
  margin-top: 215px;
`

const HabitTarget = styled.div`
  position: absolute;
  width: 100vw;
  margin-top: -188px;
  z-index: 2;
`

const GoalNameText = styled.h4`
  text-align: center;
  color: black;
  margin: 0;
  margin-bottom: 5px;
  z-index: 3;
  position: absolute;
`

const DailyTimeText = styled.h4`
  text-align: center;
  color: black;
  margin: 0;
  z-index: 4;

  position: absolute;
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
