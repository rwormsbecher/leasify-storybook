import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { LeasifyHeader3 } from './HtmlHeader';
import { generalTheme } from '../../themes/generalTheme';
import { ThemeProvider } from 'styled-components';

const meta: Meta<typeof LeasifyHeader3> = {
    title: 'leasify/html/h3',
    component: LeasifyHeader3,
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
type Story = StoryObj<typeof LeasifyHeader3>;

export const Default: Story = {
    args: {
        children: 'Leasify header 3',
    },
};
