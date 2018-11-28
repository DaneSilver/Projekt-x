import React, { Component } from 'react'
//import styled from 'styled-components'

export default class Calendar extends Component {
  render() {
    const { targetDate } = this.props
    return (
      <div>
        <div>{targetDate}</div>
      </div>
    )
  }
}
