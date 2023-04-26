import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { screenSize } from '../../themes/global';

export enum LeasifyButtonTypesEnum {
    Primary = 'Primary',
    Secondary = 'Secondary',
}

export enum LeasifyButtonSizesEnum {
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large',
    FullWidth = 'FullWidth',
}

export enum LeasifyButtonHorizontalPositionEnum {
    Left = 'Left',
    Center = 'Center',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType?: LeasifyButtonTypesEnum;
    size?: LeasifyButtonSizesEnum;
    alignX?: LeasifyButtonHorizontalPositionEnum;
    children: JSX.Element | string;
}

const LeasifyButtonUI = styled.button<IButtonProps>`
    padding: 4px 64px;
    display: flex;
    background-color: ${themeProps => themeProps.theme.primaryColor500};
    color: white;
    outline: none;
    border: none;
    font-size: 1rem;
    width: 100%;

    &:hover {
        cursor: pointer;
    }

    @media ${screenSize.tablet} {
        width: initial;
    }

    /* Button type styles  */
    ${({ buttonType }: any) =>
        buttonType === LeasifyButtonTypesEnum.Primary &&
        css`
            background: ${themeProps => themeProps.theme.primaryColor500};
        `}

    ${({ buttonType }: any) =>
        buttonType === LeasifyButtonTypesEnum.Secondary &&
        css`
            background: ${themeProps => themeProps.theme.secondaryColor500};
            color: ${themeProps => themeProps.theme.secondaryTextcolor};
        `}


    /* Button sizes styles */ 
    ${({ size }: any) =>
        size === LeasifyButtonSizesEnum.Small &&
        css`
            padding: 0.25rem 0.5rem;
        `}

    ${({ size }: any) =>
        size === LeasifyButtonSizesEnum.Medium &&
        css`
            padding: 0.5rem 1rem;
        `}

    ${({ size }: any) =>
        size === LeasifyButtonSizesEnum.Large &&
        css`
            padding: 0.75rem 1.5rem;
        `}
    
    ${({ size }: any) =>
        size === LeasifyButtonSizesEnum.FullWidth &&
        css`
            padding: 0.75rem 1.5rem;

            @media (min-width: 600px) {
                width: 100%;
            }
        `}

    /* Button horizontal alignment styles */ 
    ${({ alignX }: any) =>
        alignX === LeasifyButtonHorizontalPositionEnum.Left &&
        css`
            justify-content: flex-start;
        `}

    ${({ alignX }: any) =>
        alignX === LeasifyButtonHorizontalPositionEnum.Center &&
        css`
            justify-content: center;
        `}
`;

export const LeasifyButton: React.FC<IButtonProps> = ({
    buttonType = LeasifyButtonTypesEnum.Primary,
    size = LeasifyButtonSizesEnum.Medium,
    alignX = LeasifyButtonHorizontalPositionEnum.Left,
    children,
    ...props
}) => {
    return (
        <LeasifyButtonUI
            alignX={alignX}
            size={size}
            buttonType={buttonType}
            {...props}
        >
            {children}
        </LeasifyButtonUI>
    );
};
