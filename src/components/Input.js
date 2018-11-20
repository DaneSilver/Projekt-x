import React, { Component } from 'react'
import styled from 'styled-components'

const Formstyle = styled.form`
  display: flex;
  flex-direction: column;
`

const Labelstyle = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 50px;
`

export default class Input extends Component {
  render() {
    return (
      <Formstyle>
        <Labelstyle>Mein Ziel</Labelstyle>
        <input placeholder="Name des Ziels" />
      </Formstyle>
    )
  }
}
