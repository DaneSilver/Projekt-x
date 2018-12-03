import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
//import uid from 'uid'
import styled from 'styled-components'
import Input from '../Functions/Input'
import Button from '../Functions/Button'
import Slider from '../Functions/Slider'
import HeaderSelection from '../Functions/HeaderSelection'

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

const Btn = styled.section`
  display: flex;
  justify-content: center;
`

export default class Selection extends Component {
  setStartDate = () => {
    let saveObject = this.getSaveObject() // laden des speicherobjekts
    saveObject.startDate = new Date() // setzen des aktuellen Datums
    console.log(saveObject)
    this.saveObject(saveObject) // speichern des speicherobjekts
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
          <Btn>
            <Button onClick={this.setStartDate} />
          </Btn>
        </NavLink>
      </Wrapper>
    )
  }
}
