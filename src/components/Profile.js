import React, { Component } from 'react'
import styled from 'styled-components'

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
  justify-content: center;
  align-items: center;
  background-color: red;
  height: 100px;
  width: 100px;
  border-radius: 5px;
`
const H1 = styled.h1`
  display: flex;
  height: 100px;
  width: 100px;
  align-items: center;
`
const H2 = styled.h2`
  display: flex;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
`

export default class Profile extends Component {
  render() {
    return (
      <HabitTarget>
        <Flex>
          <Circle>
            <H1>{this.props.goalName}</H1>
          </Circle>
        </Flex>
        <Flex>
          <Circle>
            <H2>{this.props.dailyTime}</H2>
          </Circle>
        </Flex>
      </HabitTarget>
    )
  }
}
