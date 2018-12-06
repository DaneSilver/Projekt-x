import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeaderProfile from '../Functions/HeaderProfile'
import { NavLink } from 'react-router-dom'
import Footer from '../Functions/Footer'

const GridCalendar = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 25px);
  grid-template-columns: repeat(3, 25px 25px 25px);
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 30px;
  grid-gap: 8px;
`
const RestDaysFlex = styled.section`
  display: flex;
  justify-content: center;
`

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
  z-index: 3;

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
  // static propTypes = {
  //   goalName: PropTypes.string,
  //   dailyTime: PropTypes.number
  // }

  checkFuture = day => {
    // berechnung von heute bis startDatum, ob tag in der zukunft liegt
    // if:

    if (day.isInFuture) {
      return 'futureClass'
    }

    // wenn tag heute ist oder in der vergangenheit liegt, prüfe auf success
    if (day.success) {
      return 'successClass'
    } else {
      return 'failureClass'
    }

    // else: wenn datum in der Zukunft liegt, dann return futureClass
  }

  render() {
    const { days, dateDifference } = this.props
    console.log(days)

    return (
      <React.Fragment>
        <HeaderProfile
          goalName={this.props.goalName}
          dailyTime={this.props.dailyTime}
        />
        <RestDaysFlex>
          <RestDaysText>
            Super! <br />
            {dateDifference} von 66 Tagen erreicht! <br />
            Weiter so!
          </RestDaysText>
        </RestDaysFlex>
        <GridCalendar>
          {days.map((day, index) => (
            <FlexBox key={index}>
              <Circle className={this.checkFuture(day)}>{index + 1}</Circle>
            </FlexBox>
          ))}
        </GridCalendar>
        <NavLink to="/Profile">
          <Footer />
        </NavLink>
      </React.Fragment>
    )
  }
}
