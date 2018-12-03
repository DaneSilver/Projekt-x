import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import dayArray from '../../dayArray.json'
import HeaderProfile from '../Functions/HeaderProfile'

const GridCalendar = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 5vh);
  grid-template-columns: repeat(3, 5vh 5vh 5vh);
  justify-content: center;
  margin-top: 100px;
  grid-gap: 5px;
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
    background: grey;
  }

  &.failureClass {
    background: red;
  }

  &.successClass {
    background: green;
  }
`

export default class Profile extends Component {
  state = {
    days: dayArray
  }

  static propTypes = {
    goalName: PropTypes.string,
    dailyTime: PropTypes.number
  }

  render() {
    console.log(this.state.days)
    return (
      <React.Fragment>
        <HeaderProfile />
        <GridCalendar>
          {this.state.days.map((dayObject, index) => (
            <FlexBox key={index}>
              <Circle
                className={
                  dayObject.future
                    ? 'futureClass '
                    : dayObject.success
                    ? 'successClass'
                    : 'failureClass'
                }
              >
                {index + 1}
              </Circle>
            </FlexBox>
          ))}
        </GridCalendar>
      </React.Fragment>
    )
  }
}
