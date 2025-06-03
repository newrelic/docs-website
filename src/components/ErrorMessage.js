import React from 'react';
import styled from '@emotion/styled';

const ErrorMessage = () => (
  <ErrorContainer>
    <h3>Oops! Something went wrong.</h3>
  </ErrorContainer>
);

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--secondary-background-color);
  height: 100%;
  width: calc(100vw - var(--sidebar-width) - 3rem);
  h3 {
    color: var(--secondary-text-color);
  }
`;

export default ErrorMessage;
