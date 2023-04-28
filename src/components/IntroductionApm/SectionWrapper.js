import React from 'react';
import styled from '@emotion/styled';

export const SectionWrapper = ({ children, column }) => (
  <Wrapper column={column}>{children}</Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.column ? `column` : `row`)};
`;
