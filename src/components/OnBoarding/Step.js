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
import onboardingVerticle from 'images/onboarding-vertical.png';

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

  @media screen and (max-width: 1000px) {
    margin-bottom: 24px;
  }
`;

const Container = styled.div`
  background-image: url(${(p) => p.background});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 20px 10px 56px 10px;
  position: relative;
  width: 26%;

  &:first-child {
    padding-left: 24px;
  }

  &:last-child {
    width: 23%;

    @media screen and (max-width: 1000px) {
      background-image: none;
      width: 100%;
    }
  }

  @media screen and (max-width: 1000px) {
    align-items: center;
    background-image: url(${onboardingVerticle});
    display: flex;
    flex-direction: column;
    padding: 32px 10px 40px 10px;
    width: 100%;
  }
`;

const CTA = styled(Button)`
  bottom: 20px;
  border-color: ${(p) => (p.number === 0 ? 'white' : 'var(--button-border-color)')};
  color: ${(p) => (p.number === 0 ? 'white' : 'var(--button-border-color)')};
  position: absolute;
  right: 50px;

  @media screen and (max-width: 1000px) {
    border-color: var(--button-border-color);
    bottom: 0;
    color: var(--button-border-color);
    position: relative;
    right: 0;
  }
`;

const ReadDocs = styled.a`
  bottom: 20px;
  color: var(--button-border-color);
  display: flex;
  position: absolute;
  right: 50px;

  p {
    font-size: 14px;
    margin-bottom: 0;
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 1000px) {
    bottom: 0;
    position: relative;
    right: 0;
  }
`;

const Text = styled.p`
  color: ${(p) => (p.number === 0 ? 'white' : 'var(--button-border-color)')};
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  width: ${(p) => (p.number === 3 ? '100%' : '80%')};

  @media screen and (max-width: 1000px) {
    color: var(--button-border-color);
    text-align: center;
    width: 100%;
  }
`;

const Title = styled.h4`
  color: ${(p) => (p.number === 0 ? 'white' : 'var(--button-border-color)')};
  font-size: 1rem;
  margin: 0 0 8px;
  position: relative;
  width: 90%;

  @media screen and (max-width: 1000px) {
    color: var(--button-border-color);
    text-align: center;
    width: 100%;
  }

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

    @media screen and (max-width: 1000px) {
      background-color: transparent;
      color: var(--button-border-color);
      content: '${(p) => p.number}.';
      margin-right: 8px;
    }
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
