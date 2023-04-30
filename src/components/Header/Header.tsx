import React, { HTMLAttributes, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { screenSize } from '../../themes/global';

export interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    breadCrumbLinks: IHeaderLink[];
    button?: JSX.Element;
}

export interface IHeaderLink {
    text: string;
    to: string;
}

const Header = styled.div`
    z-index: 10;

    @media ${screenSize.desktop} {
        height: 160px;
    }

    .content-area {
        position: relative;
        background: linear-gradient(133.18deg, #005e5d 0%, #00857a 100.14%);
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding-bottom: 24px;
        z-index: 11;

        .slash {
            position: absolute;
            width: 296px;
            min-height: 100%;
            left: calc(50% - 296px / 2);
            top: calc(50% - 100% / 2);
            clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
            clip-path: polygon(0 0, 63% 0, 38% 100%, 0 100%);
            z-index: 10;

            background: linear-gradient(
                118.81deg,
                rgba(0, 117, 110, 0.0001) 12.1%,
                #078a7f 64.28%
            );
        }

        @media ${screenSize.desktop} {
            height: 160px;
            padding-bottom: 0px;
            .slash {
                height: 160px;
                top: calc(50% - 160px / 2);
            }
        }
    }
`;

const BreadCrumbContainer = styled.div`
    display: flex;
    width: 100%;
    color: white;
    font-size: 16px;
    margin: 38px 16px 16px 16px;
    z-index: 12;

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style-type: none;
        display: inline-flex;
        margin: 0 8px 0 0;

        &:first-of-type {
            margin-left: 0;
        }

        a {
            color: white;
            text-decoration: none;
            margin-right: 8px;

            &:hover,
            &:active,
            &.active {
                text-decoration: underline;
            }
        }
    }

    @media ${screenSize.desktop} {
        margin: 38px 174px 16px 174px;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 0 16px;
    z-index: 12;
    flex-direction: column;

    h1 {
        font-family: 'Roboto Condensed', Roboto, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 32px;
        color: white;
        margin: 16px 0 24px 0;
        padding: 0;
    }

    @media ${screenSize.desktop} {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        margin: 0px 174px;
    }
`;

export const LeasifyHeader: React.FC<IHeaderProps> = ({
    breadCrumbLinks,
    title,
    button,
    ...props
}) => {
    const linksUi = useMemo(() => {
        if (breadCrumbLinks.length > 0) {
            return breadCrumbLinks.map((link: IHeaderLink, index: number) => {
                if (breadCrumbLinks.length - 1 === index) {
                    return <li key={link.text}>{link.text}</li>;
                }

                return (
                    <li key={link.text}>
                        <NavLink to={link.to}>{link.text}</NavLink>
                        <span>&gt;</span>
                    </li>
                );
            });
        } else {
            return;
        }
    }, [breadCrumbLinks]);

    return (
        <Header {...props}>
            <div className="content-area">
                <div className="slash"></div>
                <BreadCrumbContainer
                    style={
                        breadCrumbLinks.length === 0
                            ? { marginTop: '12px' }
                            : {}
                    }
                >
                    <ul>{linksUi}</ul>
                </BreadCrumbContainer>
                <TitleContainer>
                    <h1>{title}</h1>
                    {button}
                </TitleContainer>
            </div>
        </Header>
    );
};
