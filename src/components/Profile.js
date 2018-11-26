import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Date from './Date'

const HabitTarget = styled.section`
  display: grid;
  height: 100vh;
  margin: 2em;
`
const Flex = styled.div`
  margin: 5em;
`
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100px;
  width: 100px;
  border-radius: 5px;
`

const H2 = styled.h2`
  display: flex;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
`

export default class Profile extends Component {
  static propTypes = {
    goalName: PropTypes.string,
    dailyTime: PropTypes.number
  }

  render() {
    const { goalName, dailyTime } = this.props

    return (
      <HabitTarget>
        <Flex>
          <Circle>
            <h1>{goalName}</h1>
          </Circle>
        </Flex>
        <Flex>
          <Circle>
            <H2>{dailyTime}</H2>
          </Circle>
        </Flex>
        <Date />
      </HabitTarget>
    )
  }
}
