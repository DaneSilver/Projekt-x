import React, { Component } from 'react'
import styled from 'styled-components'
import image from '../../images/wohnzimmerwand.svg'

const LivingRoom = styled.div`
  min-height: 230px;
  width: 100vw;
  margin-top: -30px;
  background-image: url(${image});
  background-size: cover;
  z-index: 1;
  position: relative;
`

const TextGoal = styled.h4`
  position: absolute;
  color: black;
  margin-top: 100px;
  z-index: 2;
`

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 150px;
  margin-top: 223px;
  background-color: #d8d8d8;
  z-index: 0;
`

const TextFlex = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class HeaderSelection extends Component {
  render() {
    return (
      <React.Fragment>
        <LivingRoom>
          <TextFlex>
            <TextGoal>
              Welches Ziel <br />
              verfolgst Du?
            </TextGoal>
          </TextFlex>
        </LivingRoom>
        <Background />
      </React.Fragment>
    )
  }
}
