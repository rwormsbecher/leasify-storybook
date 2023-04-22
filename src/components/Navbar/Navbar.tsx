import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { generalTheme } from '../../themes/generalTheme';
import { NavLink } from 'react-router-dom';
import { screenSize } from '../../themes/global';

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
    background-color: ${(p: any) => (p.theme as any).primaryColor200};

    @media ${screenSize.desktop} {
        height: 48px;
    }
`;

const LinkContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media ${screenSize.desktop} {
        width: calc(100% - 284px);
        margin: 0 142px;
        justify-content: flex-start;
    }
    height: 100%;

    a {
        width: 50%;
        height: 100%;
        display: inline-flex;
        align-items: center;
        list-style-type: none;
        color: ${(p: any) => (p.theme as any).textColor300};
        text-decoration: none;

        @media ${screenSize.desktop} {
            width: initial;
        }
    }

    .active {
        background: ${(p: any) => (p.theme as any).primaryColor500};
        color: white;
    }
`;

const LinkItem = styled.li`
    display: inline-flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    padding: 16px 0;

    .icon {
        font-size: 20px;
    }

    @media ${screenSize.desktop} {
        flex-direction: row;
        padding: 0 16px;
        width: initial;

        .icon {
            margin: 4px 8px 0 0px;
        }
    }
`;

export const LeasifyNavbar: React.FC<INavbarComponentProps> = ({
    links,
    ...props
}) => {
    return (
        <ThemeProvider theme={generalTheme}>
            <Navbar {...props}>
                <LinkContainer>
                    {links.map((link: ILink) => (
                        <NavLink to={link.to} key={link.text}>
                            <LinkItem
                                key={link.text}
                                data-testid={`icon-${link.to}`}
                            >
                                <span className="icon">{link.icon}</span>
                                <span>{link.text}</span>
                            </LinkItem>
                        </NavLink>
                    ))}
                </LinkContainer>
            </Navbar>
        </ThemeProvider>
    );
};
