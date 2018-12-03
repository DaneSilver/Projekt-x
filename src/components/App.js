import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import styled from 'styled-components'
import Selection from './Pages/Selection'
import Profile from './Pages/Profile'
import Home from './Pages/Home'

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
`

export default class App extends Component {
  state = {
    goalName: 'Coden lernen',
    dailyTime: 20,
    today: new Date(),
    startDate: this.getStartDate(),
    totalDays: 66,
    success: false,
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

  getStartDate() {
    // laden das speicherobjekt
    let saveObject = this.getSaveObject()

    if (saveObject != null) {
      // prüfen ob startDate vorhanden
      if (saveObject.startDate) {
        return saveObject.startDate
      }
    }
    return null
  }

  getSaveObject() {
    // laden des speicherobjekt
    let saveObject = localStorage.getItem('app66')
    return JSON.parse(saveObject) // localstorage item zu objekt umwandeln
  }

  saveObject(object) {
    // 2. benutzen das "object", wandeln es in ein String um und speichern es in localStorage
    localStorage.setItem('app66', JSON.stringify(object))
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/Selection"
            render={() => (
              <Selection
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
