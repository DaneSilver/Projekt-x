import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

// import styled from 'styled-components'
import ButtonPlus from '../components/Functions/ButtonPlus'

import Input from '../components/Functions/Input'
import Button from '../components/Functions/Button'

import RCSlider from 'rc-slider'
import 'rc-slider/assets/index.css'

//import StyleBox from './StyleBox'

storiesOf('ui/Input', module).add('default', () => (
  <React.Fragment>
    <Input onEnter={action('onEnter')} />
  </React.Fragment>
))

storiesOf('ui/Slider', module).add('default', () => (
  <React.Fragment>
    <RCSlider
      min={5}
      max={60}
      step={5}
      handleStyle={{
        background: 'red',
        border: '1px solid white',
        transform: 'scale(1.5)'
      }}
      trackStyle={{ background: '#7ED321' }}
      railStyle={{ background: '#676767' }}
    />
  </React.Fragment>
))

storiesOf('ui/Button', module).add('default', () => (
  <React.Fragment>
    <Button onClick={action('onClick')} />
  </React.Fragment>
))

storiesOf('ui/ButtonPlus', module).add('default', () => (
  <React.Fragment>
    <ButtonPlus />
  </React.Fragment>
))
