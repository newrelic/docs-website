import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Icon } from '@newrelic/gatsby-theme-newrelic';

export const StackedContent = ({ img, list, subTitle }) => {
  return (
    <Container>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      <ImageWrapper>
        <img src={img} />
      </ImageWrapper>
      {list && (
        <ListWrapper>
          {list.map((item, i) => (
            <ListItem key={i}>
              <Icon
                name="fe-check"
                css={css`
                  margin-right: 8px;
                `}
              />
              <li>{item}</li>
            </ListItem>
          ))}
        </ListWrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px 40px;
  width: 80%;
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
  margin: 32px 0;

  img {
    object-fit: contain;
    width: 100%;
  }
`;

const SubTitle = styled.h2`
  font-size: 28px;
`;
