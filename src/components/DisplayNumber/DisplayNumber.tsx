import React from 'react';
import styled from 'styled-components';

export interface DisplayNumberProps {
    number: string;
    offset: string;
}

interface FractionalValueProps {
    offset: string;
}

const FractionalValue = styled.sup<FractionalValueProps>`
    display: inline-flex;
    font-size: small;
    line-height: 1;
    vertical-align: text-top;
    margin-top: ${props => props.offset};
`;

export const DisplayNumber: React.FC<DisplayNumberProps> = ({
    number,
    offset,
}) => {
    const baseNumber = number.toString();
    const baseValue = baseNumber.substring(0, baseNumber.length - 2);
    const fractionalValue = baseNumber.slice(-2).toString();

    return (
        <>
            {baseValue}
            <FractionalValue offset={offset}>{fractionalValue}</FractionalValue>
        </>
    );
};
