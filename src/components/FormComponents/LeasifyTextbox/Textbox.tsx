import React, {
    forwardRef,
    ForwardRefRenderFunction,
    HTMLAttributes,
    ReactElement,
} from 'react';
import styled from 'styled-components';

export enum LeasifyTextboxTypesEnum {
    Text = 'text',
    Password = 'password',
}

const Textbox = styled.input`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #91aba9;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #cccccc;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-bottom: 16px;

    &:focus-visible {
        outline: -webkit-focus-ring-color 1px;
        outline-color: #ccc;
        outline-style: auto;
        outline-width: 1px;
    }
    &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #999;
        opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #999;
    }

    &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: #999;
    }
`;

export interface ILeasifyTextbox extends HTMLAttributes<HTMLInputElement> {
    type?: LeasifyTextboxTypesEnum;
}

const LeasifyTextboxComponent: ForwardRefRenderFunction<
    HTMLInputElement,
    ILeasifyTextbox
> = ({ type = LeasifyTextboxTypesEnum.Text, ...props }, ref): ReactElement => {
    return <Textbox type={type} {...props} ref={ref}></Textbox>;
};

export const LeasifyTextbox = forwardRef(LeasifyTextboxComponent);
