import React, { Component } from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
// import styled from 'styled-components'

export default class Date extends Component {
  render() {
    return (
      <div>
        <InfiniteCalendar width={400} height={600} disabledDays={[0, 2]} />
      </div>
    )
  }
}
