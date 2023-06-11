import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { LeasifyHeader2 } from './HtmlHeader';
import { generalTheme } from '../../themes/generalTheme';
import { ThemeProvider } from 'styled-components';

const meta: Meta<typeof LeasifyHeader2> = {
    title: 'leasify/html/h2',
    component: LeasifyHeader2,
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
type Story = StoryObj<typeof LeasifyHeader2>;

export const Default: Story = {
    args: {
        children: 'Leasify header 2',
    },
};
