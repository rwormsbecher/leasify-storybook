import React from 'react';
import { render, screen } from '@testing-library/react';
import { LeasifyContentCard } from './ContentCard';
import '@testing-library/jest-dom';

describe('LeasifyContentCard component', () => {
    it('renders children', () => {
        render(
            <LeasifyContentCard>
                <span>Test Content</span>
            </LeasifyContentCard>
        );
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('renders props', () => {
        render(
            <LeasifyContentCard style={{ background: 'hotpink' }}>
                something
            </LeasifyContentCard>
        );
        const contentCard = screen.getByTestId('content-card');
        expect(contentCard).toHaveStyle(`background: hotpink;`);
    });
});
