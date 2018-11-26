import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import Input from '../components/Input'
import Button from '../components/Button'

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
    <RCSlider />
  </React.Fragment>
))

storiesOf('ui/Button', module).add('default', () => (
  <React.Fragment>
    <Button />
  </React.Fragment>
))
