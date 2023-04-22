import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { generalTheme } from '../../themes/generalTheme';
import { NavLink } from 'react-router-dom';

export interface ILink {
    text: string;
    icon: JSX.Element;
    to: string;
}

interface INavbarComponentProps {
    links: ILink[];
}

const Navbar = styled.nav`
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 48px;
    background-color: ${(p: any) => (p.theme as any).primaryColor200};
`;

const LinkContainer = styled.div`
    display: flex;
    width: calc(100% - 284px);
    height: 100%;
    margin: 0 142px;

    a {
        display: inline-flex;
        padding: 0 16px;
        height: 100%;
        align-items: center;
        list-style-type: none;
        color: ${(p: any) => (p.theme as any).textColor300};
        text-decoration: none;

        span {
            margin-right: 8px;
        }
    }

    .active {
        background: ${(p: any) => (p.theme as any).primaryColor500};
        color: white;
    }
`;

// const LinkItem = styled.li`
//     display: inline-flex;
//     padding: 0 16px;
//     height: 100%;
//     align-items: center;
// `;

export const NavbarComponent: React.FC<INavbarComponentProps> = ({
    links = [],
    ...props
}) => {
    return (
        <ThemeProvider theme={generalTheme}>
            <Navbar {...props}>
                <LinkContainer>
                    {links.map((link: ILink) => (
                        <NavLink to={link?.to} key={link?.text}>
                            <li key={link?.text}>
                                <span>{link?.icon}</span>
                                {link?.text}
                            </li>
                        </NavLink>
                    ))}
                </LinkContainer>
            </Navbar>
        </ThemeProvider>
    );
};
