import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Props } from '../src/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked my button' },
  },
  args: {
    children: 'Default  text',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'I am secondary',
  },
};
