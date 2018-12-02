import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
//import uid from 'uid'
import styled from 'styled-components'
import Input from '../Functions/Input'
import Button from '../Functions/Button'
import Slider from '../Functions/Slider'

const Wrapper = styled.section`
  display: grid;
  width: 100%;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
  filter: alpha(opacity=50);
  height: 30vh;
  width: 50vw;
  background: blue;
  background-image: url(https://source.unsplash.com/random);
  background-size: cover;
  z-index: 0;
`

const Oval = styled.div``

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
          <Button onClick={this.setStartDate} />
        </NavLink>
      </Wrapper>
    )
  }
}
