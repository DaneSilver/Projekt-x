import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ButtonPlus from '../Functions/ButtonPlus'

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <NavLink to="/Selection">
          <ButtonPlus />
        </NavLink>
      </div>
    )
  }
}
