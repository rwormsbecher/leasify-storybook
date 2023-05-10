import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ILabelProps extends HTMLAttributes<HTMLLabelElement> {
    title?: string;
    htmlFor?: string;
}

export const Label = styled.label`
    display: block;
    margin-bottom: 4px;
    color: ${themeProps => themeProps.theme.primaryMuted400};
`;

export const LeasifyLabel: React.FC<ILabelProps> = ({
    title = '',
    ...props
}) => {
    return <Label {...props}>{title}</Label>;
};
