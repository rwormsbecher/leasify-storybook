import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import {
    LeasifyButton,
    LeasifyButtonHorizontalPositionEnum,
    LeasifyButtonSizesEnum,
    LeasifyButtonTypesEnum,
} from './Button';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { generalTheme } from '../../themes/generalTheme';

describe('Leasify button', () => {
    test('renders a button with no parameters as green', () => {
        // arrange
        const { getByText } = render(
            <ThemeProvider theme={generalTheme}>
                <LeasifyButton>test</LeasifyButton>
            </ThemeProvider>
        );

        // assert
        expect(getByText(/test/i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveStyle(
            'background: rgb(0, 113, 107)'
        );
    });

    test('renders a secondary button in yellow', () => {
        //arrange
        render(
            <ThemeProvider theme={generalTheme}>
                <LeasifyButton buttonType={LeasifyButtonTypesEnum.Secondary}>
                    test
                </LeasifyButton>
            </ThemeProvider>
        );

        //assert
        expect(screen.getByRole('button')).toHaveStyle(
            'background: rgb(255, 210, 0)'
        );
    });

    test.each`
        size                                | textalign                                     | justifyPosition | padding
        ${LeasifyButtonSizesEnum.Small}     | ${LeasifyButtonHorizontalPositionEnum.Left}   | ${'flex-start'} | ${'0.25rem 0.5rem'}
        ${LeasifyButtonSizesEnum.Medium}    | ${LeasifyButtonHorizontalPositionEnum.Left}   | ${'flex-start'} | ${'0.5rem 1rem'}
        ${LeasifyButtonSizesEnum.Large}     | ${LeasifyButtonHorizontalPositionEnum.Left}   | ${'flex-start'} | ${'0.75rem 1.5rem'}
        ${LeasifyButtonSizesEnum.FullWidth} | ${LeasifyButtonHorizontalPositionEnum.Center} | ${'center'}     | ${'0.75rem 1.5rem'}
    `(
        'renders a $size button with padding $padding and text-align $textalign',
        ({ size, textalign, justifyPosition, padding }) => {
            // arrange
            render(
                <ThemeProvider theme={generalTheme}>
                    <LeasifyButton
                        data-testid={size}
                        size={size}
                        alignX={textalign}
                    >
                        test
                    </LeasifyButton>
                </ThemeProvider>
            );

            // assert
            expect(screen.getByTestId(size)).toHaveStyle(
                `padding: ${padding}; justify-content: ${justifyPosition}`
            );
        }
    );
});
