import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeaderProfile from '../ui/HeaderProfile'
// import { NavLink } from 'react-router-dom'
import Footer from '../ui/Footer'

const Wrapper = styled.section`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 350px auto 60px;
  grid-template-columns: 100vw;
`

const GridCalendar = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 25px);
  grid-template-columns: repeat(3, 25px 25px 25px);
  justify-content: center;
  grid-gap: 8px;
  z-index: 3;
`
// const RestDaysFlex = styled.section`
//   display: flex;
//   justify-content: center;
// `

const RestDaysText = styled.h4`
  position: absolute;
  text-align: center;
  color: #00978e;
  margin-top: 5px;
  margin-bottom: 10px;
`

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border-radius: 50%;

  &.futureClass {
    background: #eaeaea;
  }

  &.failureClass {
    background: red;
  }

  &.successClass {
    background: green;
  }
`

export default class Profile extends Component {
  static propTypes = {
    goalName: PropTypes.string,
    dailyTime: PropTypes.number
  }

  checkFuture = day => {
    if (day.isInFuture) {
      return 'futureClass'
    }

    if (day.success) {
      return 'successClass'
    } else {
      return 'failureClass'
    }
  }

  render() {
    const { days, dateDifference, goalName, dailyTime } = this.props

    return (
      <Wrapper>
        <HeaderProfile goalName={goalName} dailyTime={dailyTime}>
          <RestDaysText>
            Super! <br />
            {dateDifference} von 66 Tagen erreicht! <br />
            Weiter so!
          </RestDaysText>
        </HeaderProfile>
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
