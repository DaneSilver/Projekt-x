import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Header from '../ui/Header'
// import { NavLink } from 'react-router-dom'
import Footer from '../ui/Footer'

const Wrapper = styled.section`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-rows: auto auto 60px;
`

const GridCalendar = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 25px);
  grid-template-columns: repeat(3, 25px 25px 25px);
  justify-content: center;
  align-items: center;
  grid-gap: 8px;
  z-index: 1;
  margin-top: 60px;
`

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 150px;
  margin-top: 225px;
  background-image: linear-gradient(#bdd9dc, #fff);
  z-index: -2;
`

const RestDaysText = styled.h4`
  text-align: center;
  color: #9c27b0;
  position: absolute;
  margin-left: 94px;
  margin-top: 246px;
  text-shadow: 2px 1px #e3e3e3;
`

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HabitTarget = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100vw;
  z-index: 2;
`

const GoalNameText = styled.h4`
  text-align: center;
  color: black;
  margin-bottom: 0;
  margin-top: 51px;
  text-shadow: 2px 1px #e3e3e3;
`

const DailyTimeText = styled.h4`
  text-align: center;
  color: black;
  margin-top: 5px;
  text-shadow: 2px 1px #e3e3e3;
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  font-size: 12px;

  &.border {
    border: 2px solid #9c27b0;
  }

  &.gray {
    background: #e6e6e66b;
  }

  &.red {
    background: #ff5c5c;
  }

  &.green {
    background: #00c900;
  }
`

export default class Profile extends Component {
  static propTypes = {
    goalName: PropTypes.string,
    dailyTime: PropTypes.number
  }

  checkFuture = day => {
    let todayClass = day.isToday ? 'border ' : ''

    if (day.isInFuture || day.success == null) {
      return todayClass + 'gray'
    }

    if (day.success) {
      return todayClass + 'green'
    } else {
      return todayClass + 'red'
    }
  }

  render() {
    const { days, dateDifference, goalName, dailyTime } = this.props

    return (
      <Wrapper>
        <Header goalName={goalName} dailyTime={dailyTime} />
        <Background />
        <RestDaysText>
          Super! <br />
          {dateDifference} von 66 Tagen erreicht! <br />
          Weiter so!
        </RestDaysText>
        <HabitTarget>
          <GoalNameText>{goalName}</GoalNameText>
          <DailyTimeText>{dailyTime} Minuten</DailyTimeText>
        </HabitTarget>
        <GridCalendar>
          {days.map((day, index) => (
            <FlexBox key={index}>
              <Circle className={this.checkFuture(day)}>{index + 1}</Circle>
            </FlexBox>
          ))}
        </GridCalendar>

        <Footer />
      </Wrapper>
    )
  }
}
