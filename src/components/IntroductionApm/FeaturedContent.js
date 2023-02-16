import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Icon } from '@newrelic/gatsby-theme-newrelic';

export const FeaturedContent = ({ img, list, subTitle, text, title }) => (
  <Container>
    <TextContainer separator={title}>
      {title && <Title>{title}</Title>}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {text && text.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      {list && (
        <ListWrapper>
          {list.map((item, i) => (
            <ListItem key={i}>
              <Icon
                name="fe-check"
                css={css`
                  margin-right: 8px;
                  width: 36px;
                `}
              />
              <li>{item}</li>
            </ListItem>
          ))}
        </ListWrapper>
      )}
    </TextContainer>
    <ImageWrapper>
      <img src={img} />
    </ImageWrapper>
  </Container>
);

const Container = styled.div`
  display: flex;
  margin: 48px 0;
  padding: 0 40px;
  width: 100%;
`;

const ListItem = styled.div`
  align-items: center;
  display: flex;
`;

const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-left: 32px;
  width: 30%;

  img {
    object-fit: contain;
    width: 100%;
  }
`;

const SubTitle = styled.h2`
  font-size: 28px;
`;

const TextContainer = styled.div`
  ${(p) => p.separator && `border-right: 1px solid #f1b9df`};
  padding: 36px 0;
  padding-right: ${(p) => (p.separator ? `32px` : `0`)};
  width: 66%;
`;

const Title = styled.h1`
  font-size: 44px;
`;
