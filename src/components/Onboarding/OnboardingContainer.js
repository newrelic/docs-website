import React from 'react';
import styled from '@emotion/styled';

const OnboardingContainer = ({ children }) => {
  return (
    <Container>
      <Steps>{children}</Steps>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Steps = styled.div`
  background: var(--secondary-background-color);
  border-radius: 10px;
  display: flex;
  padding: 0;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default OnboardingContainer;
