import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Icon } from '@newrelic/gatsby-theme-newrelic';
import useBoop from 'use-boop';
import { animated } from 'react-spring';
import onboarding1 from 'images/onboarding-1.png';
import onboarding2 from 'images/onboarding-second.png';
import onboarding3 from 'images/onboarding-third.png';
import onboarding1alt from 'images/onboarding-first.png';

const BACKGROUND_IMAGES = [onboarding1, onboarding2, onboarding3, ''];

const Step = ({background, number, text, title}) => {
  const springConfig = {
    mass: 3,
    tension: 160,
    friction: 15,
  };

  const [rightButton, triggerRight] = useBoop({
    x: 20,
    springConfig,
  });

  return (
    <Container background={BACKGROUND_IMAGES[number]} onMouseEnter={triggerRight}>
      <Card>
        <Title number={number}>{title}</Title>
        <Text number={number}>{text}</Text>
      </Card>
      <CTA>
      <p>Read docs</p>
      <animated.div style={rightButton}>
        <Icon
          name="fe-arrow-right"
          size="1.5rem"
          css={css`
            color: var(--primary-text-color);
            padding-top: 8px;
          `}
        />
      </animated.div>
      </CTA>
    </Container>
  )
};

const CTA = styled.a`
  bottom: 20px;
  color: black;
  display: flex;
  position: absolute;
  right: 50px;

  p {
    font-size: 14px;
    margin-bottom: 0;
    margin-right: 0.5rem;
  }
`;

const Container = styled.div`
  background-image: url(${p => p.background});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% 100%;
  min-height: 196px;
  position: relative;
  width: 25%;
`;

const Card = styled.div`
  background-color: transparent;
  left: 24px;
  overflow: hidden;
  position: relative;
  top: 20px;
  z-index: 10;
`

const Text = styled.p`
  color: ${p => p.number === 0 ? 'white' : 'black'};  
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  width: 70%;
`;

const Title = styled.h4`
  position: relative;
  color: ${p => p.number === 0 ? 'white' : 'black'};
  margin: 0 0 8px;

  &:before {
    background: ${p => p.number === 0 ? 'white' : 'lightgrey'};
    border-radius: 50%;
    color: black;
    content: '${p => p.number}';
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    height: 12px;
    left: -24px;
    line-height: 10px;
    margin-right: 12px;
    padding: 6px 0;
    text-align: center;
    top: 6px;
    width: 24px;
  }
`;

const Frame = styled.div``

export default Step