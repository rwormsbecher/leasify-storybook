import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
    LeasifyButton,
    LeasifyButtonHorizontalPositionEnum,
    LeasifyButtonSizesEnum,
    LeasifyButtonTypesEnum,
} from './Button';

import { generalTheme } from '../../themes/generalTheme';
import { ThemeProvider } from 'styled-components';

const meta: Meta<typeof LeasifyButton> = {
    title: 'leasify/Button',
    component: LeasifyButton,
    argTypes: {},
    args: {
        size: LeasifyButtonSizesEnum.Medium,
        alignX: LeasifyButtonHorizontalPositionEnum.Center,
        buttonType: LeasifyButtonTypesEnum.Primary,
        children: 'test',
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
type Story = StoryObj<typeof LeasifyButton>;

export const Default: Story = {};

export const Secondary: Story = {
    args: {
        buttonType: LeasifyButtonTypesEnum.Secondary,
    },
};
