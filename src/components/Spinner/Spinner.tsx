import React from 'react';
import spinner from './spinner.png';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RotatingImage = styled.img`
  animation: ${rotateAnimation} 1s infinite linear;
`;

export const LeasifySpinner = ({...props}) => {

    return (
        <SpinnerContainer data-testid="spinner" {...props}>
            <RotatingImage src={spinner} alt="spinner" />
        </SpinnerContainer>
    )
}