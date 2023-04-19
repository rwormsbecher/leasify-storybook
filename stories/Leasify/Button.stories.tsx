import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  ButtonHorizontalPositionEnum,
  ButtonSizesEnum,
  ButtonTypesEnum,
} from '../../src/components/Button/Button';

import { generalTheme } from '../../src/themes/generalTheme';
import { ThemeProvider } from 'styled-components';

const meta: Meta<typeof Button> = {
  title: 'leasify/Button',
  component: Button,
  argTypes: {},
  args: {
    size: ButtonSizesEnum.Medium,
    alignX: ButtonHorizontalPositionEnum.Center,
    buttonType: ButtonTypesEnum.Primary,
    children: <span>test</span>,
  },
  decorators: [
    Story => (
      <ThemeProvider theme={generalTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    buttonType: ButtonTypesEnum.Secondary,
  },
};
