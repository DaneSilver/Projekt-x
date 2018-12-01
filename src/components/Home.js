import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
//import uid from 'uid'
import styled from 'styled-components'
import Input from './Input'
import Button from './Button'
import Slider from './Slider'

const Wrapper = styled.section`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 30vh;
  background: blue;
  z-index: 0;
`

const Oval = styled.div`
  position: absolute;
  width: 550px;
  height: 150px;
  background-color: white;
  margin-block-start: 100px;
  border-radius: 80%;
  z-index: 1;
`

const CircleHeader = styled.div`
  position: absolute;
  margin-block-start: 25px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: white;
  background-image: url(https://source.unsplash.com/random);
  background-size: cover;
  border: 3px solid white;
  z-index: 2;
`

const TextSizeGoal = styled.h3`
  color: black;
  margin-top: 90px;
  z-index: 3;
`
const TextSizeTime = styled.h3`
  color: black;
`

const TextFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TimeDisplay = styled.h3`
  color: green;
`

export default class Home extends Component {
  static propTypes = {
    setSlider: PropTypes.func,
    dailyTime: PropTypes.number,
    onInput: PropTypes.func
  }

  render() {
    const { onInput, setSlider, dailyTime, setStartDate } = this.props

    // const today = new Date().toLocaleDateString()

    return (
      <Wrapper>
        <Header>
          <CircleHeader />
          <Oval />
        </Header>
        <TextFlex>
          <TextSizeGoal>Welches Ziel verfolgst Du?</TextSizeGoal>
        </TextFlex>
        <Input onChange={onInput} />
        <TextFlex>
          <TextSizeTime>Wie viele Minuten pro Tag?</TextSizeTime>
        </TextFlex>
        <Slider onChange={setSlider} value={dailyTime} startTime={dailyTime} />
        <TimeDisplay>{dailyTime} Minuten</TimeDisplay>
        <NavLink to="/Profile">
          <Button onClick={setStartDate} />
        </NavLink>
      </Wrapper>
    )
  }
}

/* <span>{today}</span> */

/* linear-gradient(
    180deg,
    #9fb8ad 0%,
    #1fc8db 51%,
    #2cb5e8 75%
  ); */
