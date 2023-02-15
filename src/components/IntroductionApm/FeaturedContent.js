import React from 'react';
import styled from '@emotion/styled';

export const FeaturedContent = ({ img, list, subTitle, text, title }) => {
  return (
    <Container>
      <TextContainer>
        {title && <Title>{title}</Title>}
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        {text && text.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        <ListWrapper>
          {list && list.map((item, i) => <li key={i}>{item}</li>)}
        </ListWrapper>
      </TextContainer>
      <ImageWrapper>
        <img src={img} />
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const ListWrapper = styled.ul`
  list-style-type: '→';
`;

const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-left: 34px;
  width: 34%;

  img {
    object-fit: contain;
    width: 100%;
  }
`;

const SubTitle = styled.h2`
  font-size: 28px;
`;

const TextContainer = styled.div`
  border-right: 1px solid #f1b9df;
  padding: 36px 32px 36px 0;
  width: 66%;
`;

const Title = styled.h1`
  font-size: 44px;
`;
