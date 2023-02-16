import React from 'react';
import styled from '@emotion/styled';

export const SmallStackedContent = ({ img, subTitle, text }) => (
  <Container>
    <ImageWrapper>
      <img src={img} />
    </ImageWrapper>
    <SubTitle>{subTitle}</SubTitle>
    <Text>{text}</Text>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 32px;
`;

const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 32px 0;

  img {
    object-fit: contain;
    width: 100%;
  }
`;

const SubTitle = styled.h2`
  font-size: 18px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 14px;
  text-align: center;
`;
