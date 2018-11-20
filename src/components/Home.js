import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import uid from 'uid'
import Input from './Input'
import Button from './Button'
import Slider from './Slider'
import Profile from './Profile'

//import styled from 'styled-components'

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Input />
        <Slider />
        <NavLink to="/Profile">
          <Button />
        </NavLink>
      </React.Fragment>
    )
  }
}
