import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NavbarComponent } from './Navbar';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { RiFoldersLine } from 'react-icons/ri';
import { generalTheme } from '../../themes/generalTheme';
import { ThemeProvider } from 'styled-components';
import { RouterOutlet } from './RouterOutlet';
import { Route, Routes } from 'react-router-dom';

const routes = (
    <Routes>
        <Route path="/" element={<p>/ is rendered</p>} />
        <Route path="/help" element={<p>/help is rendered</p>} />
    </Routes>
);

const meta: Meta<typeof NavbarComponent> = {
    title: 'leasify/Navbar',
    component: NavbarComponent,
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
type Story = StoryObj<typeof NavbarComponent>;

export const NavbarWithLinks: Story = {
    args: {
        links: [
            { text: 'Overzicht', icon: <RiFoldersLine />, to: '/' },
            { text: 'Hulp nodig?', icon: <MdOutlineLiveHelp />, to: '/help' },
        ],
    },
};
