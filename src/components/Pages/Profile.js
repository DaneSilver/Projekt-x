import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeaderProfile from '../Functions/HeaderProfile'
import { NavLink } from 'react-router-dom'
import ButtonLinkQuery from '../Functions/ButtonLinkQuery'

const GridCalendar = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 5vh);
  grid-template-columns: repeat(3, 5vh 5vh 5vh);
  justify-content: center;
  margin-top: 60px;
  grid-gap: 5px;
`

const BtnStyle = styled.section`
  position: absolute;
  margin-left: 75px;
  margin-top: 35px;
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
  height: 4vh;
  width: 4vh;
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
  static propTypes = {
    goalName: PropTypes.string,
    dailyTime: PropTypes.number
  }

  checkFuture = dayObject => {
    // berechnung von heute bis startDatum, ob tag in der zukunft liegt
    // if:

    // wenn tag heute ist oder in der vergangenheit liegt, prüfe auf success
    if (dayObject.success) {
      return 'successClass'
    } else {
      return 'failureClass'
    }

    // else: wenn datum in der Zukunft liegt, dann return futureClass
    return 'futureClass'
  }

  render() {
    const { days } = this.props

    return (
      <React.Fragment>
        <HeaderProfile
          goalName={this.props.goalName}
          dailyTime={this.props.dailyTime}
        />
        <NavLink to="/Abfrage">
          <BtnStyle>
            <ButtonLinkQuery />
          </BtnStyle>
        </NavLink>
        <GridCalendar>
          {days.map((dayObject, index) => (
            <FlexBox key={index}>
              <Circle className={() => this.checkFuture(dayObject)}>
                {index + 1}
              </Circle>
            </FlexBox>
          ))}
        </GridCalendar>
      </React.Fragment>
    )
  }
}
