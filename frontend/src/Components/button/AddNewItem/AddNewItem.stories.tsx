import React from 'react';
import { AddNewItem } from 'Components';
import { action } from '@storybook/addon-actions';

export default { title: 'Button AddNewItem', component: AddNewItem };

export const text = (): JSX.Element => (
  <AddNewItem onClick={action('clicked')} />
);

text.story = {
  parameters: {
    notes:
      'AddNewItem accepts function that can be hooked to redirect user to custom pages.',
  },
};
