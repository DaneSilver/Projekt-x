import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import styled from 'styled-components'
//import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  text-align: center;
  grid-gap: 50px;
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/Profile" render={() => <Profile />} />
        </Wrapper>
      </Router>
    )
  }
}
