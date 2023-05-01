import React from 'react';
import styled from 'styled-components';

interface ILabelProps {
    title: string;
}

export const Label = styled.label`
    display: block;
    margin-bottom: 4px;
`;

export const LeasifyLabel: React.FC<ILabelProps> = ({ title }) => {
    return <Label>{title}</Label>;
};
