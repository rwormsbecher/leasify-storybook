import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LeasifyContentCard } from './ContentCard';
import { generalTheme } from '../../themes/generalTheme';
import { ThemeProvider } from 'styled-components';

const meta: Meta<typeof LeasifyContentCard> = {
    title: 'leasify/CardContent',
    component: LeasifyContentCard,
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
type Story = StoryObj<typeof LeasifyContentCard>;

export const Default: Story = {
    parameters: {
        backgrounds: { default: 'light' },
    },
    args: {
        children: <p>I am a content card</p>,
    },
};
