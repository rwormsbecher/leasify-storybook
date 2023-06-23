import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { generalTheme } from '../../../themes/generalTheme';
import { ThemeProvider } from 'styled-components';
import { RadioComponent} from './Radio';

const meta: Meta<typeof RadioComponent> = {
    title: 'leasify forms/radio button',
    component: RadioComponent,
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
type Story = StoryObj<typeof RadioComponent>;

export const Default: Story = {
    args: {
        internalName: "choice",
        text: "De factuur is aan Asset Based Finance NV geaddresseerd."
    }
};
