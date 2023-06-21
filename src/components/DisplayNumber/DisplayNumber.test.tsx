import React from 'react';
import { render } from '@testing-library/react';
import { DisplayNumber, DisplayNumberProps } from './DisplayNumber';
import '@testing-library/jest-dom';

describe('DisplayNumber', () => {
    const defaultProps: DisplayNumberProps = {
        number: '€ 5.000,00',
        offset: '10px',
    };

    it('should render the base value and fractional value correctly', () => {
        // arrange
        const { getByText } = render(<DisplayNumber {...defaultProps} />);
        const baseValue = getByText('€ 5.000,');
        const fractionalValue = getByText('00');

        // assert
        expect(baseValue).toBeInTheDocument();
        expect(fractionalValue).toBeInTheDocument();
    });

    it('should apply the offset to the fractional value', () => {
        // arrange
        const { getByText } = render(<DisplayNumber {...defaultProps} />);
        const fractionalValue = getByText('00');

        // assert
        expect(fractionalValue).toHaveStyle('margin-top: 10px');
    });
});
