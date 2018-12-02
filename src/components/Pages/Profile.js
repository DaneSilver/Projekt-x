import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import dayArray from '../../dayArray.json'

const Wrapper = styled.section``

const HabitTarget = styled.div`
  display: grid;
  grid-template-columns: 80vw;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  justify-content: center;
  background: purple;
  border-radius: 10px;
`

const H2 = styled.h2`
  text-align: center;
  color: white;
`
const GridCalendar = styled.div`
  display: grid;
  grid-template-rows: repeat(11, 7vh);
  grid-template-columns: repeat(2, 7vh 7vh 7vh);
  grid-gap: 10px;
  margin: 1em;
  justify-content: center;
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
  height: 7vh;
  width: 7vh;
  border-radius: 50%;

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
    const { goalName, dailyTime } = this.props
    console.log(this.state.days)
    return (
      <Wrapper>
        <HabitTarget>
          <H2>{goalName}</H2>
          <H2>{dailyTime} Minuten</H2>
        </HabitTarget>
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
      </Wrapper>
    )
  }
}
