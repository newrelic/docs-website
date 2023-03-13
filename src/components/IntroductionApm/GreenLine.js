import React from 'react';
import styled from '@emotion/styled';

export const GreenLine = () => (
  <Wrapper>
    <Line />
  </Wrapper>
);

const Line = styled.div`
  background-color: var(--brand-button-primary-accent);
  height: 100%;
  width: 2px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 48px;
  padding: 0;
  width: 24px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
