import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import styled from 'styled-components'
import Selection from './Pages/Selection'
import Profile from './Pages/Profile'
import Home from './Pages/Home'
import Query from './Pages/Query'
import moment from 'moment'

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
`

const TOTAL_DAYS = 66

export default class App extends Component {
  state = {
    goalName: this.getGoalName(),
    dailyTime: this.getDailyTime(),
    today: new Date(),
    startDate: this.getStartDate(),
    totalDays: TOTAL_DAYS,
    days: this.getDays(),
    dateDifference: this.getDateDifference() || 0,
    response: null
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

  setResponse = response => {
    console.log(response)

    this.setState({
      days: {
        ...this.state.days,
        [this.state.dateDifference]: {
          ...this.state.days[this.state.dateDifference],
          success: response
        }
      }
    })
  }

  getDays() {
    let saveObject = this.loadObject()
    return (
      saveObject.days ||
      new Array(TOTAL_DAYS).fill().map((_, index) => {
        return {
          day: index + 1,
          success: false,
          isInFuture: true
        }
      })
    )
  }

  getResponse() {
    const saveObject = this.loadObject()
    return saveObject.response
  }

  getDateDifference() {
    const now = moment(new Date())
    console.log(now)
    const start = moment(this.getStartDate())
    const diff = Math.floor(moment.duration(now.diff(start)).asDays())
    console.log(now)
    return diff === -1 ? 0 : diff
  }

  getStartDate() {
    const saveObject = this.loadObject()
    return new Date(saveObject.startDate)
  }

  getGoalName() {
    const saveObject = this.loadObject()
    return saveObject.goalName
  }

  getDailyTime() {
    // laden das speicherobjekt
    const saveObject = this.loadObject()
    return saveObject.dailyTime
  }

  loadObject() {
    try {
      return JSON.parse(localStorage.getItem('app66')) || {}
    } catch (error) {
      return {}
    }
  }

  saveObject(object) {
    // 2. benutzen das "object", wandeln es in ein String um und speichern es in localStorage
    localStorage.setItem('app66', JSON.stringify(object))
  }

  componentDidUpdate() {
    this.saveObject(this.state)
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
                totalDays={this.state.totalDays}
                days={this.state.days}
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
                dateDifference={this.state.dateDifference}
              />
            )}
          />
          <Route
            path="/Query"
            render={() => (
              <Query
                dateDifference={this.state.dateDifference}
                setResponse={this.setResponse}
              />
            )}
          />
        </Wrapper>
      </Router>
    )
  }
}
