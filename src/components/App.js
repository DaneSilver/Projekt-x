import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import styled from 'styled-components'
import Home from './Home'
import Profile from './Profile'

const Wrapper = styled.section``

export default class App extends Component {
  state = {
    goalName: 'Coden lernen',
    dailyTime: 20,
    today: new Date(),
    startDate: null,
    totalDays: 66,
    success: false,
    failure: false,
    future: true
  }

  getEndDate() {
    const days = 24 * 60 * 60 * 1000
    return new Date(this.state.startDate + this.state.totalDays * days)
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

  setStartDate = () => {
    this.setState({
      startDate: this.state.today
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
                setStartDate={this.setStartDate}
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
                startDate={this.state.startDate}
                endDate={this.getEndDate()}
                today={this.state.today}
                selectedDate={this.state.selectedDate}
                onSelect={this.setDate}
              />
            )}
          />
        </Wrapper>
      </Router>
    )
  }
}
