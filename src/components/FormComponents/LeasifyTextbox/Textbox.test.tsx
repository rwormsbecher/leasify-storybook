import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LeasifyTextbox } from './Textbox';
import '@testing-library/jest-dom';

describe('LeasifyTextbox', () => {
    it('renders the textbox correctly and spread props', () => {
        const { getByPlaceholderText } = render(
            <LeasifyTextbox placeholder="Enter your name" />
        );
        const textbox = getByPlaceholderText('Enter your name');

        expect(textbox).toBeInTheDocument();
    });

    it('updates the value when typed in', () => {
        const { getByPlaceholderText } = render(
            <LeasifyTextbox placeholder="Enter your name" />
        );
        const textbox = getByPlaceholderText(
            'Enter your name'
        ) as HTMLInputElement;

        fireEvent.change(textbox, { target: { value: 'John' } });

        expect(textbox.value).toBe('John');
    });
});
