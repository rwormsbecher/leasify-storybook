import { ForwardRefRenderFunction, HTMLAttributes, ReactElement, forwardRef } from "react";
import styled from "styled-components";
import React from "react";

export interface ILeasifyRadioButton extends HTMLAttributes<HTMLInputElement> {
    internalName: string,
    text: string
}

const RadioButtonContainer = styled.div`
    display: flex;
    min-height: 24px;

    label {
        display: inline-flex;
        align-items: center;
        height: 100%;
        margin-top: 2px;
        align-self: start;
    }
`;

const RadioButton = styled.input.attrs({ type: 'radio' })`
    display: inline-flex;
    accent-color: ${themeProps => themeProps.theme.primaryColor500};
    height: 24px;
    width: 24px;
    margin: 0 8px 16px;

    &:hover {
        accent-color: ${themeProps => themeProps.theme.primaryColor500};
    }
  

    &:focus-visible {
        outline: -webkit-focus-ring-color 1px;
        outline-color: ${themeProps => themeProps.theme.primaryColor500};
        outline-style: auto;
        outline-width: 1px;
    }
    &::placeholder {
        accent-color: ${themeProps => themeProps.theme.primaryColor500};
    }

    &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: ${themeProps => themeProps.theme.primaryColor500};
    }

    &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: ${themeProps => themeProps.theme.primaryColor500};
    }
`;

const RadioButtonComponent: ForwardRefRenderFunction<
    HTMLInputElement,
    ILeasifyRadioButton
> = ({ ...props }, ref): ReactElement => {
    return (
        <RadioButtonContainer>
            <RadioButton id={props.internalName} name={props.internalName}  {...props} ref={ref} />
            <label htmlFor={props.internalName}>{props.text}</label>
        </RadioButtonContainer>
    );
};


export const RadioComponent = forwardRef(RadioButtonComponent);

