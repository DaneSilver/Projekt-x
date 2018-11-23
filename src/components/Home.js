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
  background: deeppink;
`

export default class Home extends Component {
  static propTypes = {
    setSlider: PropTypes.func,
    dailyTime: PropTypes.string,
    onInput: PropTypes.func
  }

  render() {
    const { onInput, setSlider, dailyTime } = this.props

    return (
      <React.Fragment>
        <Input onChange={onInput} />
        <Slider onChange={setSlider} startTime={dailyTime} />
        <TimeDisplay>{dailyTime} Minuten</TimeDisplay>
        <NavLink to="/Profile">
          <Button />
        </NavLink>
      </React.Fragment>
    )
  }
}
