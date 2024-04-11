import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button, Icon } from '@newrelic/gatsby-theme-newrelic';
import useBoop from 'use-boop';
import { animated } from 'react-spring';
import PropTypes from 'prop-types';

import onboarding1 from 'images/onboarding-1.png';
import onboarding2 from 'images/onboarding-second.png';
import onboarding3 from 'images/onboarding-third.png';
import onboardingVerticle from 'images/onboarding-verticle.png';

const BACKGROUND_IMAGES = [onboarding1, onboarding2, onboarding3];

const Step = ({ button, buttonHref, number, readDocsHref, text, title }) => {
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
    <Container
      background={BACKGROUND_IMAGES[number] ?? null}
      onMouseEnter={triggerRight}
    >
      <Card>
        <Title number={number}>{title}</Title>
        <Text number={number}>{text}</Text>
      </Card>
      {readDocsHref && (
        <ReadDocs href={readDocsHref}>
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
        </ReadDocs>
      )}
      {button && (
        <CTA number={number} variant={Button.VARIANT.OUTLINE} href={buttonHref} >
          <Icon
            css={css`
              margin-right: 4px;
            `}
            name="fe-external-link"
          />
          {button}
        </CTA>
      )}
    </Container>
  );
};

const Card = styled.div`
  background-color: transparent;
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  background-image: url(${(p) => p.background});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% 100%;
  padding: 20px 10px 56px 10px;
  position: relative;
  width: 26%;

  &:first-child {
    padding-left: 24px;
  }

  &:last-child {
    width: 23%;
  }
`;

const CTA = styled(Button)`
  bottom: 20px;
  border-color: ${(p) => (p.number === 0 ? 'white' : 'black')};
  color: ${(p) => (p.number === 0 ? 'white' : 'black')};
  position: absolute;
  right: 50px;
`;

const ReadDocs = styled.a`
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

const Text = styled.p`
  color: ${(p) => (p.number === 0 ? 'white' : 'black')};
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  width: 80%;
`;

const Title = styled.h4`
  color: ${(p) => (p.number === 0 ? 'white' : 'black')};
  font-size: 1rem;
  margin: 0 0 8px;
  position: relative;
  width: 90%;

  &:before {
    background: ${(p) => (p.number === 0 ? 'white' : 'lightgrey')};
    border-radius: 50%;
    color: black;
    content: '${(p) => p.number}';
    display: inline-block;
    font-size: 18px;
    font-weight: 400;
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

Step.propTypes = {
  button: PropTypes.string,
  buttonHref: PropTypes.string,
  number: PropTypes.number.isRequired,
  readDocsHref: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

export default Step;
