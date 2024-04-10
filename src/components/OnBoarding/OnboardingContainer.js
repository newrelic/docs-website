import React from 'react';
import styled from '@emotion/styled';

const OnboardingContainer = ({children}) => {
  return (
    <Container>
      <h2>Get started in three easy steps</h2>
      <Steps>{children}</Steps>
    </Container>
  )
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Steps = styled.div`
  background: white;
  border-radius: 10px;
  display: flex;
  padding: 0;
  width: 100%;
`



export default OnboardingContainer;