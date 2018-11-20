import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import Input from '../components/Input'

//import StyleBox from './StyleBox'

storiesOf('ui/Input', module).add('default', () => (
  <React.Fragment>
    <Input onEnter={action('onEnter')} />
  </React.Fragment>
))
