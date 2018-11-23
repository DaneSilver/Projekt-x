import React, { Component } from 'react'
import styled from 'styled-components'

const Formstyle = styled.form`
  display: flex;
  flex-direction: column;
`

const Labelstyle = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 50px;
  background: deeppink;
`

const input = styled.input`
  margin-bottom: 50px;
`

export default class Input extends Component {
  render() {
    const { onChange } = this.props

    return (
      <Formstyle>
        <Labelstyle>
          <h1>Mein Ziel</h1>
        </Labelstyle>
        <input
          onChange={event => onChange(event.target.value)}
          placeholder="Name des Ziels"
        />
      </Formstyle>
    )
  }
}
