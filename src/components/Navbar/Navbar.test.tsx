import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { LeasifyNavbar, ILink } from './Navbar';
import { RouterOutlet } from './RouterOutlet';
import { Route, Routes } from 'react-router-dom';
import { RiFoldersLine } from 'react-icons/ri';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { generalTheme } from '../../themes/generalTheme';

const mockLinks: ILink[] = [
    {
        text: 'Overzicht',
        icon: <RiFoldersLine />,
        to: '/',
    },
    {
        text: 'Hulp nodig?',
        icon: <MdOutlineLiveHelp />,
        to: '/help',
    },
];

const routes = (
    <Routes>
        <Route path="/" element={<p>/ is rendered</p>} />
        <Route path="/help" element={<p>/help is rendered</p>} />
    </Routes>
);

describe('NavbarComponent', () => {
    beforeEach(() => {
        render(
            <RouterOutlet routes={routes}>
                <LeasifyNavbar links={mockLinks} />
            </RouterOutlet>
        );
    });

    test('should render the correct number of links', () => {
        // arrange
        const links = screen.getAllByRole('link');

        // assert
        expect(links).toHaveLength(mockLinks.length);
    });

    test('should render the correct text for each link', () => {
        // arrange
        mockLinks.forEach(link => {
            const linkObj = screen.getByRole('link', {
                name: link?.text,
            });

            //assert
            expect(linkObj).toBeInTheDocument();
        });
    });

    test('should render the correct icon for each link', () => {
        // arrange
        mockLinks.forEach(link => {
            const iconElement = screen.getByTestId(`icon-${link.to}`);

            // assert
            expect(iconElement).toBeInTheDocument();
        });
    });

    test('should render the correct background color for active links', () => {
        // arrange
        const activeLink = screen.getByRole('link', {
            name: mockLinks[0].text,
        });

        const inactiveLink = screen.getByRole('link', {
            name: mockLinks[1].text,
        });

        // assert
        expect(inactiveLink).not.toHaveClass('active');
        expect(activeLink).toHaveClass('active');
        expect(activeLink).toHaveStyle(
            `background-color: ${generalTheme.primaryColor500};`
        );
    });
});
