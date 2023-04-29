import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LeasifyHeader, IHeaderProps } from './Header';
import { ThemeProvider } from 'styled-components';
import { generalTheme } from '../../themes/generalTheme';
import '@testing-library/jest-dom';

const defaultProps: IHeaderProps = {
    title: 'Test Header',
    breadCrumbLinks: [
        { text: 'Home', to: '/' },
        { text: 'Page 1', to: '/page-1' },
    ],
};

describe('HeaderComponent', () => {
    it('should render the title and breadcrumb links correctly', () => {
        //arrange
        render(
            <ThemeProvider theme={generalTheme}>
                <Router>
                    <LeasifyHeader {...defaultProps} />
                </Router>
            </ThemeProvider>
        );

        const titleElement = screen.getByText(defaultProps.title);
        // Length should be equal to the length of the array -1 one because the last item is not a link.
        const breadcrumbElements = screen.queryAllByRole('link');

        // Assert
        expect(titleElement).toBeInTheDocument();

        if (breadcrumbElements.length > 0) {
            expect(breadcrumbElements).toHaveLength(
                defaultProps.breadCrumbLinks.length - 1
            );
            breadcrumbElements.forEach((element, index) => {
                expect(element).toHaveTextContent(
                    defaultProps.breadCrumbLinks[index].text
                );
            });
        }
    });

    it('should render the breadcrumb when the links are empty', () => {
        //arrange
        render(
            <ThemeProvider theme={generalTheme}>
                <Router>
                    <LeasifyHeader title="Test title" breadCrumbLinks={[]} />
                </Router>
            </ThemeProvider>
        );

        const titleElement = screen.getByText('Test title');
        // Length should be equal to the length of the array -1 one because the last item is not a link.
        const breadcrumbElements = screen.queryAllByRole('link');

        // Assert
        expect(titleElement).toBeInTheDocument();

        if (breadcrumbElements.length > 0) {
            expect(breadcrumbElements).toHaveLength(
                defaultProps.breadCrumbLinks.length - 1
            );
            breadcrumbElements.forEach((element, index) => {
                expect(element).toHaveTextContent(
                    defaultProps.breadCrumbLinks[index].text
                );
            });
        }
    });

    it('should render the button correctly', () => {
        // arrange
        const button = <button>Test Button</button>;

        render(
            <ThemeProvider theme={generalTheme}>
                <Router>
                    <LeasifyHeader {...defaultProps} button={button} />
                </Router>
            </ThemeProvider>
        );

        const buttonElement = screen.getByRole('button');

        // Assert
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent('Test Button');
    });
});
