import React, { Component } from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import styled from 'styled-components'

// const CalendarStyle = styled.InfiniteCalendar`
//     width={400},
//     height={600},
//     selected={today},
//     disabledDays={[0,6]},
//     minDate={lastWeek}
// `
export default class Date extends Component {
  render() {
    return (
      <div>
        <InfiniteCalendar />
      </div>
    )
  }
}
