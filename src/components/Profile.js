import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import arrays from './arrays'

const Wrapper = styled.section``

const HabitTarget = styled.div`
  display: grid;
  grid-template-columns: 80vw;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  justify-content: center;
  margin: 1em;
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
  height: 7vh;
  width: 7vh;
  border-radius: 50%;
  background: black;

  &.successClass {
    background: green;
  }

  &.failureClass {
    background: red;
  }

  &.futureClass {
    background: grey;
  }
`

export default class Profile extends Component {
  static propTypes = {
    goalName: PropTypes.string,
    dailyTime: PropTypes.number
  }

  render() {
    const { goalName, dailyTime } = this.props

    return (
      <Wrapper>
        <HabitTarget>
          <H2>{goalName}</H2>
          <H2>{dailyTime} Minuten</H2>
        </HabitTarget>
        <GridCalendar>
          {arrays.fill().map(success => (
            <FlexBox>
              {<Circle className={success ? 'true' : 'future'} />}
            </FlexBox>
          ))}
        </GridCalendar>
      </Wrapper>
    )
  }
}
