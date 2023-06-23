import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { generalTheme } from '../../themes/generalTheme';
import { ThemeProvider } from 'styled-components';
import { LeasifySpinner } from './Spinner';


const meta: Meta<typeof LeasifySpinner> = {
    title: 'leasify/Spinner',
    component: LeasifySpinner,
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
type Story = StoryObj<typeof LeasifySpinner>;

export const Spinner: Story = {};
