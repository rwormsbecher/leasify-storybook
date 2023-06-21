import React from 'react';
import { render } from '@testing-library/react';
import {
    LeaseContractOverviewDiagram,
    LeaseContractOverviewDiagramProps,
} from './LeasifyContractSummaryChart';
import { ThemeProvider } from 'styled-components';
import { generalTheme } from '../../themes/generalTheme';
import '@testing-library/jest-dom';

const mockProps: LeaseContractOverviewDiagramProps = {
    contractTotal: 100,
    contractUsedTotal: 60,
    contractPendingTotal: 20,
};

describe('LeaseContractOverviewDiagram', () => {
    test('renders correctly with the given props', () => {
        // arrange
        const { getByTestId } = render(
            <ThemeProvider theme={generalTheme}>
                <LeaseContractOverviewDiagram {...mockProps} />
            </ThemeProvider>
        );

        const usedPercentageBar = getByTestId('used-percentage-bar');
        const pendingPercentageBar = getByTestId('pending-percentage-bar');
        const availablePercentageBar = getByTestId('available-percentage-bar');

        // assert
        expect(usedPercentageBar).toBeInTheDocument();
        expect(pendingPercentageBar).toBeInTheDocument();
        expect(availablePercentageBar).toBeInTheDocument();
    });

    test('calculates the correct width for each bar', () => {
        // arrange
        const { getByTestId } = render(
            <LeaseContractOverviewDiagram {...mockProps} />
        );
        const usedPercentageBar = getByTestId('used-percentage-bar');
        const pendingPercentageBar = getByTestId('pending-percentage-bar');
        const availablePercentageBar = getByTestId('available-percentage-bar');

        // assert
        expect(usedPercentageBar).toHaveStyle('width: 60%');

        // we do the substraction to make sure the margin is added back to have the rounded effect
        expect(pendingPercentageBar).toHaveStyle('width: calc(20% + 4px)');
        expect(availablePercentageBar).toHaveStyle('width: calc(20% + 4px)');
    });

    test('displays the correct titles for each bar', () => {
        // arrange
        const { getByTestId } = render(
            <LeaseContractOverviewDiagram {...mockProps} />
        );
        const usedPercentageBar = getByTestId('used-percentage-bar');
        const pendingPercentageBar = getByTestId('pending-percentage-bar');
        const availablePercentageBar = getByTestId('available-percentage-bar');

        // assert
        expect(usedPercentageBar).toHaveAttribute('title', '60 used.');
        expect(pendingPercentageBar).toHaveAttribute('title', '20 pending.');
        expect(availablePercentageBar).toHaveAttribute(
            'title',
            '20 available.'
        );
    });

    test('displays the correct aria-valuenow for each bar', () => {
        // arrange
        const { getByTestId } = render(
            <LeaseContractOverviewDiagram {...mockProps} />
        );
        const usedPercentageBar = getByTestId('used-percentage-bar');
        const pendingPercentageBar = getByTestId('pending-percentage-bar');
        const availablePercentageBar = getByTestId('available-percentage-bar');

        // assert
        expect(usedPercentageBar).toHaveAttribute('aria-valuenow', '60');
        expect(pendingPercentageBar).toHaveAttribute('aria-valuenow', '20');
        expect(availablePercentageBar).toHaveAttribute('aria-valuenow', '20');
    });
});
