import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LeasifyHeader, IHeaderLink } from './Header';

import { generalTheme } from '../../themes/generalTheme';
import { ThemeProvider } from 'styled-components';
import { RouterOutlet } from '../Navbar/RouterOutlet';
import { Route, Routes } from 'react-router-dom';
import {
    LeasifyButton,
    LeasifyButtonSizesEnum,
    LeasifyButtonTypesEnum,
} from '../Button/Button';
import { MdOutlineAdd } from 'react-icons/md';

const routes = (
    <Routes>
        <Route path="/" element={<></>} />
        <Route path="/help" element={<></>} />
    </Routes>
);

const links: IHeaderLink[] = [
    {
        text: 'Mijn overzicht',
        to: '/',
    },
    {
        text: 'Voertuigen',
        to: '/help',
    },
    {
        text: 'Personenautos',
        to: '/personenautos',
    },
];

const meta: Meta<typeof LeasifyHeader> = {
    title: 'leasify/Header',
    component: LeasifyHeader,
    argTypes: {},
    args: {},
    decorators: [
        Story => (
            <ThemeProvider theme={generalTheme}>
                <RouterOutlet routes={routes}>
                    <Story />
                </RouterOutlet>
            </ThemeProvider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof LeasifyHeader>;

export const Default: Story = {
    args: {
        breadCrumbLinks: links,
        title: "Personenauto's",
        button: (
            <LeasifyButton
                buttonType={LeasifyButtonTypesEnum.Secondary}
                size={LeasifyButtonSizesEnum.Large}
            >
                <>
                    <span
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            height: '100%',
                            marginRight: '4px',
                            fontSize: '20px',
                        }}
                    >
                        <MdOutlineAdd />
                    </span>
                    <span
                        style={{
                            display: 'inline-flex',
                            height: '100%',
                            alignItems: 'center',
                            marginTop: '2px',
                        }}
                    >
                        Voeg een factuur toe
                    </span>
                </>
            </LeasifyButton>
        ),
    },
};

export const headerWithoutButton: Story = {
    args: {
        breadCrumbLinks: links,
        title: "Personenauto's",
    },
};

export const headerWithOnlyTitle: Story = {
    args: {
        breadCrumbLinks: [],
        title: "Personenauto's",
    },
};
