import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button, Icon, Link } from '@newrelic/gatsby-theme-newrelic';
import useBoop from 'use-boop';
import { animated } from 'react-spring';
import PropTypes from 'prop-types';

import onboardingFull from 'images/onboarding-0.svg';
import onboardingArrow from 'images/onboarding-2.svg';
import onboardingVerticle from 'images/onboarding-vertical.svg';

const OnboardingStep = ({
  button,
  buttonHref,
  number,
  docsHref,
  hrefText,
  text,
  title,
}) => {
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
      background={
        // eslint-disable-next-line no-nested-ternary
        number === 3 ? 'null' : number === 0 ? onboardingFull : onboardingArrow
      }
      onMouseEnter={triggerRight}
    >
      <Card>
        <Title number={number}>{title}</Title>
        <Text number={number}>{text}</Text>
      </Card>
      {docsHref && (
        <ReadDocs href={docsHref}>
          <p>{hrefText}</p>
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
        <CTA
          number={number}
          variant={Button.VARIANT.OUTLINE}
          as={Link}
          to={buttonHref}
        >
          {button}
          <Icon
            css={css`
              margin-left: 8px;
            `}
            name="fe-external-link"
          />
        </CTA>
      )}
    </Container>
  );
};

const Card = styled.div`
  background-color: transparent;
  position: relative;
  z-index: 10;
  margin-left: 10px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 24px;
    margin-left: 0;
  }
`;

const Container = styled.div`
  background-image: url(${(p) => p.background});
  background-position: right center;
  background-repeat: no-repeat;
  background-size: 39px 100%;
  padding: 20px 10px 56px 10px;
  position: relative;
  width: 26%;

  &:first-of-type {
    padding-left: 24px;
    background-size: 100% 100%;
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
    background-size: 100% 32px;
    background-position: bottom center;
    display: flex;
    flex-direction: column;
    padding: 16px 10px 24px 10px;
    width: 100%;
    &:first-child {
      background-size: 100% 32px;
      padding-left: unset;
      padding-top: 40px;
    }
  }
`;

const CTA = styled(Button)`
  bottom: 20px;
  border-color: ${(p) =>
    p.number === 0 ? 'white' : 'var(--button-border-color)'};
  border-radius: 4px;
  color: ${(p) => (p.number === 0 ? 'white' : 'var(--button-border-color)')};
  font-size: 12px;
  font-weight: 500;
  line-height: 1rem;
  padding: 0.25rem 0.5rem;
  position: absolute;
  right: 50px;
  &:hover {
    border-color: ${(p) =>
      p.number === 0 ? 'var(--brand-button-primary-accent-hover)' : '#00ac69'};
    color: ${(p) =>
      p.number === 0 ? 'var(--brand-button-primary-accent-hover)' : '#00ac69'};
    .dark-mode & {
      border-color: ${(p) =>
        p.number === 0
          ? 'var(--brand-button-primary-accent-hover)'
          : 'var(--brand-button-primary-accent)'};
      color: ${(p) =>
        p.number === 0
          ? 'var(--brand-button-primary-accent-hover)'
          : 'var(--brand-button-primary-accent)'};
    }
  }

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
  &:hover {
    border-color: #00ac69;
    color: #00ac69;
    svg {
      color: #00ac69;
    }
    .dark-mode & {
      border-color: var(--brand-button-primary-accent);
      color: var(--brand-button-primary-accent);
      svg {
        color: var(--brand-button-primary-accent);
      }
    }
  }

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

OnboardingStep.propTypes = {
  button: PropTypes.string,
  buttonHref: PropTypes.string,
  number: PropTypes.number.isRequired,
  docsHref: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

export default OnboardingStep;
