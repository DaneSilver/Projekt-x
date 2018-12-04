import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import styled from 'styled-components'
import Selection from './Pages/Selection'
import Profile from './Pages/Profile'
import Home from './Pages/Home'
import Abfrage from './Pages/Query'

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
`

export default class App extends Component {
  state = {
    goalName: this.getGoalName(),
    dailyTime: this.getDailyTime(),
    today: new Date(),
    startDate: this.getStartDate(),
    totalDays: 66,
    days: this.getDays()
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

  getDays() {
    // laden das speicherobjekt
    let saveObject = this.loadObject()
    if (saveObject.days != null) {
      return saveObject.days
    } else {
      return null
    }
  }

  getStartDate() {
    // laden das speicherobjekt
    let saveObject = this.loadObject()
    if (saveObject.startDate != null) {
      return saveObject.startDate
    } else {
      return null
    }
  }

  getGoalName() {
    let saveObject = this.loadObject()
    if (saveObject.goalName != null) {
      return saveObject.goalName
    } else {
      return null
    }
  }

  getDailyTime() {
    // laden das speicherobjekt
    let saveObject = this.loadObject()
    if (saveObject.dailyTime != null) {
      return saveObject.dailyTime
    } else {
      return null
    }
  }

  loadObject() {
    try {
      // laden des speicherobjekt
      let object = JSON.parse(localStorage.getItem('app66'))

      // prüfen ob speicherobjekt existiert
      if (object != null) {
        // rückgabe des speicherobjekts
        return object
      } else {
        // sonst gebe leeres objekt zurück
        return {}
      }
    } catch (e) {
      return {}
    }
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
                goalName={this.state.goalName}
                saveObject={this.saveObject}
                loadObject={this.loadObject}
                totalDays={this.state.totalDays}
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
                days={this.state.days}
              />
            )}
          />
          <Route path="/Abfrage" render={() => <Abfrage />} />
        </Wrapper>
      </Router>
    )
  }
}
