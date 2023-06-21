import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DisplayNumber } from './DisplayNumber';

import { generalTheme } from '../../themes/generalTheme';
import { ThemeProvider } from 'styled-components';

const meta: Meta<typeof DisplayNumber> = {
    title: 'leasify/DisplayNumber',
    component: DisplayNumber,
    argTypes: {},
    args: {},
    decorators: [
        Story => (
            <ThemeProvider theme={generalTheme}>
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof DisplayNumber>;

export const SmallNumberInEuros: Story = {
    args: {
        number: '€ 5.000,00',
        offset: '3px',
    },
};

export const LargeNumberIndollars: Story = {
    args: {
        number: '$ 2,500,000.00',
        offset: '3px',
    },
};
