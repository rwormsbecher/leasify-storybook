import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import '@testing-library/jest-dom';

interface IContentCardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const ContentCard = styled.div`
    display: flex;
    background: #ffffff;
    box-shadow: 0px 2px 2px rgba(34, 34, 34, 0.08);
    border-radius: 2px;
    padding: 12px 16px;
`;

export const LeasifyContentCard: React.FC<IContentCardProps> = ({
    children,
    ...props
}) => {
    return (
        <ContentCard data-testid="content-card" {...props}>
            {children}
        </ContentCard>
    );
};
