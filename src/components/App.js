import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import styled from 'styled-components'
import Selection from './screens/Selection'
import Profile from './screens/Profile'
import Home from './screens/Home'
import Query from './screens/Query'
import moment from 'moment'

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
`

const TOTAL_DAYS = 66
export default class App extends Component {
  state = {
    goalName: this.getData('goalName'),
    dailyTime: this.getData('dailyTime') || 0,
    today: new Date(),
    startDate: this.getStartDate() || new Date(),
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
    const index = this.state.dateDifference
    const day = this.state.days[index]
    this.setState({
      days: [
        ...this.state.days.slice(0, index),
        { ...day, success: response },
        ...this.state.days.slice(index + 1)
      ]
    })
  }

  getDays() {
    const savedData = this.loadObject()
    const hasSavedDays = savedData.days

    if (hasSavedDays) {
      return savedData.days.map((day, index) => {
        day.isInFuture = this.getDateDifference() < index
        day.isToday = this.getDateDifference() === index
        return day
      })
    } else {
      return new Array(TOTAL_DAYS).fill().map((_, index) => {
        return {
          day: index + 1,
          success: null,
          isInFuture: index > 0,
          isToday: index === 0
        }
      })
    }
  }

  getDateDifference() {
    const now = moment(new Date())
    const start = moment(this.getStartDate())
    const diff = Math.floor(moment.duration(now.diff(start)).asDays())
    return diff === -1 ? 0 : diff
  }

  getData(objectKey) {
    const savedData = this.loadObject()
    return savedData[objectKey]
  }

  getStartDate() {
    const savedData = this.loadObject()
    return savedData.startDate && new Date(savedData.startDate)
  }

  getGoalName() {
    const savedData = this.loadObject()
    return savedData.goalName
  }

  getDailyTime() {
    // laden das speicherobjekt
    const savedData = this.loadObject()
    return savedData.dailyTime
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
            render={() => <Query setResponse={this.setResponse} />}
          />
        </Wrapper>
      </Router>
    )
  }
}
