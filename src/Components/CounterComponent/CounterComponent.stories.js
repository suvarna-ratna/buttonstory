import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

import CounterComponent from './CounterComponent';

export default {
  title: 'Components / Counter Component',
  component: CounterComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const Component = () => (
  <CounterComponent
  />
);
