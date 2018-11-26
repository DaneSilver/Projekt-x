import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Formstyle = styled.section`
  display: flex;
  flex-direction: column;
`

const Labelstyle = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 50px;
  background: white;
  border: 2px solid #a020f0;
  border-radius: 10px;
`

export const InputStyle = styled.input`
  border: 5 solid #a020f0;
  background-color: white;
  margin-bottom: 50px;
  border-radius: 15px;
  color: black;
  height: 25px;
`

export default class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  render() {
    const { onChange } = this.props

    return (
      <Formstyle>
        <Labelstyle>
          <h1>Welches Ziel verfolgst Du?</h1>
        </Labelstyle>
        <InputStyle
          onChange={event => onChange(event.target.value)}
          placeholder="  Was ist Dein Ziel?"
        />
      </Formstyle>
    )
  }
}
