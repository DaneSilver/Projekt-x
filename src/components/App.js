import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import styled from 'styled-components'
import Home from './Home'
import Profile from './Profile'

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  grid-template-rows: 1fr;
  text-align: center;
  grid-gap: 20px;
`

export default class App extends Component {
  state = {
    goalName: 'Coden lernen',
    dailyTime: 20
  }

  setGoalName = goalName => {
    this.setState({
      goalName: goalName
    })
  }

  setSlider = dailyTime => {
    this.setState({
      dailyTime: dailyTime
    })
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                onInput={this.setGoalName}
                setSlider={this.setSlider}
                dailyTime={this.state.dailyTime}
              />
            )}
          />
          <Route
            path="/Profile"
            render={() => (
              <Profile
                goalName={this.state.goalName}
                dailyTime={this.state.dailyTime}
              />
            )}
          />
        </Wrapper>
      </Router>
    )
  }
}
