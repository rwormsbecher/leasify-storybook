import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { generalTheme } from '../../../themes/generalTheme';
import { ThemeProvider } from 'styled-components';
import { LeasifyLabel } from './LeasifyLabel';

const meta: Meta<typeof LeasifyLabel> = {
    title: 'leasify forms/Label',
    component: LeasifyLabel,
    argTypes: {},
    args: {},
    decorators: [
        Story => (
            <ThemeProvider theme={generalTheme}>
                <div style={{ marginTop: '16px' }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof LeasifyLabel>;

export const Default: Story = {
    args: {
        title: 'Username',
    },
};
