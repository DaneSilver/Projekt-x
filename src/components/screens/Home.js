import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ButtonUi from '../ui/ButtonUi'

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <NavLink to="/Selection">
          <ButtonUi />
        </NavLink>
      </div>
    )
  }
}
