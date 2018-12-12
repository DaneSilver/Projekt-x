import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import plus from '../../images/plus.svg'
import wohnzimmer from '../../images/wohnzimmer.svg'

const Wrapper = styled.section`
  display: grid;
  height: 100vh;
  grid-auto-columns: 1fr 1fr 60px;
`

const Section = styled.section`
  display: flex;
  justify-content: center;
`

const LivingRoom = styled.div`
  height: 270px;
  width: 100vw;
  margin-top: -30px;
  background-image: url(${wohnzimmer});
  background-size: cover;
  z-index: -1;
  position: relative;
`

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 150px;
  margin-top: 225px;
  background-image: linear-gradient(#bdd9dc, #fff);
  z-index: -2;
`

const ButtonCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  background-color: #a1cce0;
  border-radius: 50%;
  border: 5px solid white;
  margin-top: 5px;
`

const IconPlus = styled.div`
  background-image: url(${plus});
  height: 29px;
  width: 30px;
  background-size: cover;
`

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextWindow = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 15px;
  width: 90%;
  height: 300px;
  color: #00978e;
  overflow-y: scroll;
  background-color: white;
`

const Text = styled.div`
  text-align: center;
  font-size: 15px;
  padding: 15px;
  /* font-weight: bold; */
`

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <LivingRoom />
        <Background />
        <FlexBox>
          <TextWindow>
            <Text>
              <h3>
                <strong>Herzlich Wilkommen!</strong>
              </h3>
              Es könnte so einfach sein, sein Leben in die Hand zu nehmen und
              seine Traumziele zu erreichen.
              <br />
              <br />
              Allerdings leiden wir nur allzu gerne unter der Aufschieberitis,
              leider... Damit ist jetzt Schluss!
              <br />
              <br />
              Wissenschaftler haben nämlich erkannt, dass der Mensch nur rund 66
              Tage braucht, um seine Gewohnheiten und damit sein Leben
              maßgeblich zu verändern. Von daher Weg mit miesen Angewohnheiten
              und her mit den guten!
              <br />
              <br />
              Verschaffe Dir Dank dieser App ein Überblick deiner Erfolge und
              kontrolliere täglich Deine Checkliste.
              <br />
              <br />
              Gebe Dein Ziel ein, wie viele Minuten du am Tag investieren
              möchtest und 66 Tage durchhalten!
              <br />
              Viel spaß!
              <br />
            </Text>
          </TextWindow>
        </FlexBox>
        <NavLink to="/Selection">
          <Section>
            <ButtonCircle>
              <IconPlus />
            </ButtonCircle>
          </Section>
        </NavLink>
      </Wrapper>
    )
  }
}
