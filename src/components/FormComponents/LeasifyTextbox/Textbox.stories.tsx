import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { generalTheme } from '../../../themes/generalTheme';
import { ThemeProvider } from 'styled-components';
import { LeasifyTextbox } from './Textbox';

const meta: Meta<typeof LeasifyTextbox> = {
    title: 'leasify forms/textbox',
    component: LeasifyTextbox,
    argTypes: {},
    args: {},
    decorators: [
        Story => (
            <ThemeProvider theme={generalTheme}>
                <div style={{ margin: '16px auto 0 auto', width: '960px' }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof LeasifyTextbox>;

export const Default: Story = {};
