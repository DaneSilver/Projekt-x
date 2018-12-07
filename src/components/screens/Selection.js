import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../ui/Input'
import Slider from '../ui/Slider'
import HeaderSelection from '../ui/HeaderSelection'

const Wrapper = styled.section`
  display: grid;
  width: 100vw;
  height: 100vh;
`

const Clock = styled.object`
  position: relative;
  height: 80px;
  width: 80px;
  margin-left: 140px;
  margin-right: 140px;
  margin-top: 30px;
  background-size: cover;
  background-image: url(../../images/clock3.svg);
`

const TextFlex = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MinDisplay = styled.h4`
  margin-top: 90px;
  position: absolute;
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
  margin-bottom: 20px;
`

const BtnFlex = styled.section`
  display: flex;
  justify-content: center;
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
        <HeaderSelection />
        <Input onChange={onInput} />
        <TextFlex>
          <Clock />
          <MinDisplay>Wie viele Minuten pro Tag?</MinDisplay>
        </TextFlex>
        <Slider onChange={setSlider} value={dailyTime} startTime={dailyTime} />
        <TimeDisplay>Mindestens {dailyTime} Minuten!</TimeDisplay>
        <NavLink to="/Profile">
          <BtnFlex onClick={this.setHabitData}>
            <Button />
          </BtnFlex>
        </NavLink>
      </Wrapper>
    )
  }
}
