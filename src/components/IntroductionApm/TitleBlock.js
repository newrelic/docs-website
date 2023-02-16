import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Icon } from '@newrelic/gatsby-theme-newrelic';

export const TitleBlock = ({ list, text, title }) => (
  <Container>
    <TextContainer>
      <Title>{title}</Title>
      <Text>{text}</Text>
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
    </TextContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 48px 0;
  padding: 0 40px;
  width: 100%;
`;

const ListItem = styled.div`
  align-items: center;
  display: flex;
`;

const ListWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

const Text = styled.p`
  font-size: 14px;
  text-align: center;
`;

const TextContainer = styled.div`
  padding: 36px 0;
  width: 66%;
`;

const Title = styled.h1`
  font-size: 44px;
  text-align: center;
`;
