import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { LeaseContractOverviewDiagram } from './LeasifyContractSummaryChart';
import { generalTheme } from '../../themes/generalTheme';
import { ThemeProvider } from 'styled-components';

const meta: Meta<typeof LeaseContractOverviewDiagram> = {
    title: 'leasify/charts/contract-summary-chart',
    component: LeaseContractOverviewDiagram,
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
type Story = StoryObj<typeof LeaseContractOverviewDiagram>;

export const Default: Story = {
    args: {
        contractTotal: 250000,
        contractUsedTotal: 150000,
        contractPendingTotal: 50000,
    },
};
