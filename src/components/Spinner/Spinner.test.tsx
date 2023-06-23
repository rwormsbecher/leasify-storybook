import React from 'react';
import { render } from '@testing-library/react';
import { LeasifySpinner } from './Spinner';
import '@testing-library/jest-dom';

// Mock the image import
jest.mock('./spinner.png', () => 'spinner.png');

describe('LeasifySpinner', () => {
  it('renders the spinner component', () => {
    // arrange
    const { getByTestId } = render(<LeasifySpinner />);
    const spinnerElement = getByTestId('spinner');

    // assert
    expect(spinnerElement).toBeInTheDocument();
  });

  it('renders the spinner with custom props', () => {
    // arrange
    const customProps = {
      'data-custom-prop': 'custom value',
    };
    const { getByTestId } = render(<LeasifySpinner {...customProps} />);
    const spinnerElement = getByTestId('spinner');

    // assert
    expect(spinnerElement).toHaveAttribute('data-custom-prop', 'custom value');
  });
});