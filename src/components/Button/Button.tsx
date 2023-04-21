import React from 'react';
import styled, { css } from 'styled-components';
import { screenSize } from '../../themes/global';

export enum ButtonTypesEnum {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

export enum ButtonSizesEnum {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  FullWidth = 'FullWidth',
}

export enum ButtonHorizontalPositionEnum {
  Left = 'Left',
  Center = 'Center',
}

interface IButtonProps {
  buttonType?: ButtonTypesEnum;
  size?: ButtonSizesEnum;
  alignX?: ButtonHorizontalPositionEnum;
  children: JSX.Element;
}

const LeasifyButton = styled.button<IButtonProps>`
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
      buttonType === ButtonTypesEnum.Primary &&
      css`
        background: ${themeProps => themeProps.theme.primaryColor500};
      `}

    ${({ buttonType }: any) =>
      buttonType === ButtonTypesEnum.Secondary &&
      css`
        background: ${themeProps => themeProps.theme.secondaryColor500};
        color: ${themeProps => themeProps.theme.secondaryTextcolor};
      `}


    /* Button sizes styles */ 
    ${({ size }: any) =>
      size === ButtonSizesEnum.Small &&
      css`
        padding: 0.25rem 0.5rem;
      `}

    ${({ size }: any) =>
      size === ButtonSizesEnum.Medium &&
      css`
        padding: 0.5rem 1rem;
      `}

    ${({ size }: any) =>
      size === ButtonSizesEnum.Large &&
      css`
        padding: 0.75rem 1.5rem;
      `}
      
    ${({ size }: any) =>
      size === ButtonSizesEnum.FullWidth &&
      css`
        padding: 0.75rem 1.5rem;

        @media (min-width: 600px) {
          width: 100%;
        }
      `}

    /* Button horizontal alignment styles */ 
    ${({ alignX }: any) =>
      alignX === ButtonHorizontalPositionEnum.Left &&
      css`
        justify-content: flex-start;
      `}

    ${({ alignX }: any) =>
      alignX === ButtonHorizontalPositionEnum.Center &&
      css`
        justify-content: center;
      `}
`;

export const Button: React.FC<IButtonProps> = ({
  buttonType = ButtonTypesEnum.Primary,
  size = ButtonSizesEnum.Medium,
  alignX = ButtonHorizontalPositionEnum.Left,
  children,
  ...props
}) => {
  return (
    <LeasifyButton
      alignX={alignX}
      size={size}
      buttonType={buttonType}
      {...props}
    >
      {children}
    </LeasifyButton>
  );
};
