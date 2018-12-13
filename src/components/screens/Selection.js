import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../ui/Input'
import Slider from '../ui/Slider'
import Header from '../ui/Header'
import image from '../../images/clock3.svg'

const Wrapper = styled.section`
  display: grid;
  width: 100%;
  grid-template-rows: auto 60px;
`

const Clock = styled.object`
  height: 70px;
  width: 70px;
  background-size: cover;
  background-image: url(${image});
  margin: 13px;
`

const TextFlex = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

const GoalText = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  z-index: 1;
  margin-left: 136px;
  margin-top: 53px;
  position: absolute;
  text-align: center;
`

const MinDisplay = styled.h4`
  color: black;
`

const TimeDisplay = styled.h4`
  display: flex;
  justify-content: center;
  color: #008981;
`

const Button = styled.button`
  padding: 15px;
  border-radius: 50px;
  border: 0.5px solid #00978e;
  background-color: #cfebe9;
  width: 250px;
  font-size: 15px;
  margin-bottom: -10px;
  margin-top: 10px;
`

const BtnFlex = styled.section`
  display: flex;
  justify-content: center;
`

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 150px;
  margin-top: 225px;
  background-image: linear-gradient(#bdd9dc, #fff);
  z-index: -2;
`

export default class Selection extends Component {
  setHabitData = () => {
    const { goalName, dailyTime, totalDays, days } = this.props
    let sObject = {
      startDate: new Date(),
      goalName,
      dailyTime,
      totalDays,
      days
    }

    this.props.saveObject(sObject)
  }

  static propTypes = {
    setSlider: PropTypes.func,
    dailyTime: PropTypes.number,
    onInput: PropTypes.func
  }

  render() {
    const { onInput, setSlider, dailyTime } = this.props

    return (
      <Wrapper>
        <Header />

        <Background />

        <GoalText>
          Welches Ziel <br /> verfolgst Du?
        </GoalText>

        <Input onChange={onInput} />

        <TextFlex>
          <Clock />
        </TextFlex>

        <TextFlex>
          <MinDisplay>Wie viele Minuten pro Tag?</MinDisplay>
        </TextFlex>

        <TextFlex>
          <TimeDisplay>Mindestens {dailyTime} Minuten!</TimeDisplay>
        </TextFlex>

        <Slider onChange={setSlider} value={dailyTime} startTime={dailyTime} />

        <NavLink to="/Profile">
          <BtnFlex onClick={this.setHabitData} data-cy="Button">
            <Button>Los gehts!</Button>
          </BtnFlex>
        </NavLink>
      </Wrapper>
    )
  }
}
