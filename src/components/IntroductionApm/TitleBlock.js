import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { animated, useTrail } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import { useMedia } from 'react-use';

import { Icon, useTessen } from '@newrelic/gatsby-theme-newrelic';

export const TitleBlock = ({ list, text, title }) => {
  const isMobileScreen = useMedia('(max-width: 1240px)');
  const [visible, setVisible] = useState(isMobileScreen);

  const tessen = useTessen();

  const updateVisibility = (isVisible) => {
    if (isVisible) {
      setVisible(true);

      !visible &&
        tessen.track({
          eventName: 'apmIntroVisiblityTrigger',
          category: 'MoreThanJustAPM',
          path: location.pathname,
        });
    }
  };

  const spring = useTrail(5, {
    from: {
      opacity: 0,
      y: '6%',
    },
    to: {
      opacity: visible ? 1 : 0,
      y: visible ? '0%' : '6%',
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
        <GreenLine visible={visible} />
      </Container>
    </VisibilitySensor>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 40px;
  position: relative;
  width: 100%;

  @media screen and (max-width: 1240px) {
    margin: 32px 0;
    padding: 0;
  }
`;

const GreenLine = styled.div`
  background-color: var(--brand-button-primary-accent);
  height: ${(p) => (p.visible ? '100%' : '0%')};
  left: 17px;
  position: absolute;
  top: 0;
  transition: height 750ms;
  width: 2px;
  z-index: 0;

  @media screen and (max-width: 1240px) {
    display: none;
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

  @media screen and (max-width: 1240px) {
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

  @media screen and (max-width: 1240px) {
    font-size: 28px;
  }
`;
