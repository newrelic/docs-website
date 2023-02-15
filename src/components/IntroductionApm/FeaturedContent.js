import React from 'react';
import styled from '@emotion/styled';
// import { Image } from '@newrelic/gatsby-theme-newrelic';

export const FeaturedContent = ({ title, subtitle, text, img }) => {
  return (
    <Container>
      <TextContainer>
        {title && <h1>{title}</h1>}
        {text && text.map((paragraph) => <p>{paragraph}</p>)}
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const TextContainer = styled.div`
  width: 100%;
`;
