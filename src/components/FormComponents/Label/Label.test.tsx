import { render, screen } from '@testing-library/react';
import React from 'react';
import { LeasifyLabel } from './LeasifyLabel';
import '@testing-library/jest-dom';

describe('LeasifyLabel', () => {
    test('renders with title prop', () => {
        render(
            <form>
                <LeasifyLabel title="Test Label" htmlFor="test-input" />
                <input type="text" id="test-input" />
            </form>
        );
        expect(screen.getByLabelText(/test label/i)).toBeInTheDocument();
    });

    test('renders without title prop', () => {
        render(
            <form>
                <LeasifyLabel htmlFor="test-input" />
                <input type="text" id="test-input" />
            </form>
        );
        expect(screen.getByLabelText('')).toBeInTheDocument();
    });
});
