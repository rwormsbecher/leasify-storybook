import { render } from '@testing-library/react';
import React from 'react';
import { LeasifyHeader1, LeasifyHeader2, LeasifyHeader3 } from './HtmlHeader';

test('should render H1 correctly with props', async () => {
    const { getByRole } = render(
        <LeasifyHeader1 style={{ color: 'green' }}>Header 1</LeasifyHeader1>
    );
    const heading1 = getByRole('heading', { level: 1 });
    const style = window.getComputedStyle(heading1);

    expect(heading1.innerHTML).toBe('Header 1');
    expect(style.color).toBe('green');
});

test('should render H1 correctly with props', async () => {
    const { getByRole } = render(
        <LeasifyHeader2 style={{ color: 'blue' }}>Header 2</LeasifyHeader2>
    );
    const heading2 = getByRole('heading', { level: 2 });
    const style = window.getComputedStyle(heading2);

    expect(heading2.innerHTML).toBe('Header 2');
    expect(style.color).toBe('blue');
});

test('should render H1 correctly with props', async () => {
    const { getByRole } = render(
        <LeasifyHeader3 style={{ color: 'red' }}>Header 3</LeasifyHeader3>
    );
    const heading3 = getByRole('heading', { level: 3 });
    const style = window.getComputedStyle(heading3);

    expect(heading3.innerHTML).toBe('Header 3');
    expect(style.color).toBe('red');
});
