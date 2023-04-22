import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface IOutletProps {
    children: ReactNode;
    routes: JSX.Element;
}

export const RouterOutlet: React.FC<IOutletProps> = ({ children, routes }) => {
    return (
        <BrowserRouter>
            {children}
            {routes}
        </BrowserRouter>
    );
};
