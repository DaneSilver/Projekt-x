import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../ui/ButtonUi'

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <NavLink to="/Selection">
          <Button />
        </NavLink>
      </div>
    )
  }
}
