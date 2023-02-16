import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Icon } from '@newrelic/gatsby-theme-newrelic';

export const FeaturedContent = ({
  children,
  lineIcon,
  lineIconOnly,
  img,
  list,
  subTitle,
  text,
  title,
}) => (
  <Container>
    {!lineIconOnly && (
      <>
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
        {img && (
          <ImageWrapper separator={title}>
            <img src={img} />
          </ImageWrapper>
        )}
      </>
    )}
    {lineIcon && (
      <>
        <Spacer>
          <LineIconWrapper>
            <LineIcon
              name={lineIcon}
              css={css`
                width: 36px;
              `}
            />
          </LineIconWrapper>
        </Spacer>
        {children}
      </>
    )}
  </Container>
);

const Container = styled.div`
  display: flex;
  margin: 48px 0;
  padding: 0 40px;
  position: relative;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  ${(p) => p.separator && `padding-left: 32px`};
  width: 30%;

  img {
    object-fit: contain;
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const LineIcon = styled(Icon)`
  color: var(--secondary-text-color);
  height: 33px;
  width: 33px;
`;

const LineIconWrapper = styled.div`
  align-items: center;
  background: var(--primary-background-color);
  border: 4px solid var(--secondary-text-color);
  display: flex;
  justify-content: center;
  padding: 8px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const ListItem = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 16px;
`;

const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SubTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 32px;
`;

const TextContainer = styled.div`
  ${(p) => p.separator && `border-right: 1px solid #f1b9df`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 0;
  padding-right: ${(p) => (p.separator ? `32px` : `0`)};
  width: 66%;

  @media screen and (max-width: 1000px) {
    border: 0;
    width: 100%;
  }
`;

const Spacer = styled.div`
  align-items: center;
  background: var(--primary-background-color);
  display: flex;
  justify-content: center;
  left: -50px;
  padding: 12px;
  position: absolute;
  top: 40%;
`;

const Title = styled.h1`
  font-size: 44px;
`;
