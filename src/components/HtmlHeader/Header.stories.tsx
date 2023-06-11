import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { LeasifyHeader1 } from './HtmlHeader';
import { generalTheme } from '../../themes/generalTheme';
import { ThemeProvider } from 'styled-components';

const meta: Meta<typeof LeasifyHeader1> = {
    title: 'leasify/html/h1',
    component: LeasifyHeader1,
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
type Story = StoryObj<typeof LeasifyHeader1>;

export const Default: Story = {
    args: {
        children: 'Leasify',
    },
};
