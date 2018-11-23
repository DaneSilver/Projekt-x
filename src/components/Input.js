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
  background: deeppink;
`

export const InputStyle = styled.input`
  border: 5 solid black;
  background-color: white;
  margin-bottom: 50px;
  border-radius: 15px;
  color: black;
`

export default class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  static defaultProps = {}

  render() {
    const { onChange } = this.props

    return (
      <Formstyle>
        <Labelstyle>
          <h1>Mein Ziel</h1>
        </Labelstyle>
        <InputStyle
          onChange={event => onChange(event.target.value)}
          placeholder="  Was ist Dein Ziel?"
        />
      </Formstyle>
    )
  }
}
