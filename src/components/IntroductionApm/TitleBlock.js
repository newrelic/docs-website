import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { animated, useTrail } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

import { Icon } from '@newrelic/gatsby-theme-newrelic';

export const TitleBlock = ({ list, text, title }) => {
  const [isVisible, setVisible] = useState(false);

  const updateVisibility = (isVisible) => {
    if (isVisible) {
      setVisible(true);
    }
  };

  const spring = useTrail(5, {
    from: {
      opacity: 0,
      y: '6%',
    },
    to: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? '0%' : '6%',
    },
  });

  return (
    <VisibilitySensor onChange={updateVisibility} offset={{ bottom: 200 }}>
      <Container>
        <TextContainer>
          <Title as={animated.h1} style={spring[0]}>
            {title}
          </Title>
          <Text as={animated.p} style={spring[1]}>
            {text}
          </Text>
          <ListWrapper>
            {list.map((item, i) => (
              <ListItem as={animated.div} key={i} style={spring[2 + i]}>
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
    </VisibilitySensor>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 48px 0;
  padding: 0 40px;
  width: 100%;

  @media screen and (max-width: 1000px) {
    margin: 32px 0;
    padding: 0;
  }
`;

const ListItem = styled.div`
  align-items: center;
  display: flex;
  margin-right: 8px;
`;

const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-top: 1rem;
  padding: 0;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  font-size: 14px;
  text-align: center;
`;

const TextContainer = styled.div`
  width: 80%;
`;

const Title = styled.h1`
  font-size: 44px;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 28px;
  }
`;
