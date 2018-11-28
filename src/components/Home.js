import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
//import uid from 'uid'
import styled from 'styled-components'
import Input from './Input'
import Button from './Button'
import Slider from './Slider'

//import styled from 'styled-components'

const TimeDisplay = styled.div`
  border: 2px solid #a020f0;
  background-color: white;
  margin-bottom: 50px;
  border-radius: 15px;
  color: black;
  height: 25px;
`

export default class Home extends Component {
  static propTypes = {
    setSlider: PropTypes.func,
    dailyTime: PropTypes.number,
    onInput: PropTypes.func
  }

  render() {
    const { onInput, setSlider, dailyTime, setStartDate } = this.props

    const today = new Date().toLocaleDateString()

    return (
      <React.Fragment>
        <span>{today}</span>
        <Input onChange={onInput} />
        <Slider onChange={setSlider} value={dailyTime} startTime={dailyTime} />
        <TimeDisplay>{dailyTime} Minuten</TimeDisplay>
        <NavLink to="/Profile">
          <Button onClick={setStartDate} />
        </NavLink>
      </React.Fragment>
    )
  }
}
