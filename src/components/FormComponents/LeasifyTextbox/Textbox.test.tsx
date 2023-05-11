import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LeasifyTextbox, LeasifyTextboxTypesEnum } from './Textbox';
import '@testing-library/jest-dom';

describe('LeasifyTextbox', () => {
    test('renders the textbox correctly and spread props', () => {
        // arrange
        const { getByPlaceholderText } = render(
            <LeasifyTextbox placeholder="Enter your name" />
        );
        const textbox = getByPlaceholderText('Enter your name');

        // assert
        expect(textbox).toBeInTheDocument();
    });

    test('updates the value when typed in', () => {
        // arrange
        const { getByPlaceholderText } = render(
            <LeasifyTextbox placeholder="Enter your name" />
        );
        const textbox = getByPlaceholderText(
            'Enter your name'
        ) as HTMLInputElement;

        // act
        fireEvent.change(textbox, { target: { value: 'John' } });

        // assert
        expect(textbox.value).toBe('John');
    });

    test('renders the textbox as a password input', () => {
        // arrange
        const { getByPlaceholderText } = render(
            <LeasifyTextbox
                placeholder="Enter your name"
                type={LeasifyTextboxTypesEnum.Password}
            />
        );

        // assert
        const textbox = getByPlaceholderText('Enter your name');
        expect(textbox).toHaveAttribute('type', 'password');
    });
});
