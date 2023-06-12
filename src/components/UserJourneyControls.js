import React from 'react';
import styled from '@emotion/styled';
import useBoop from 'use-boop';
import { animated } from 'react-spring';
import { css } from '@emotion/react';
import { Surface, Icon } from '@newrelic/gatsby-theme-newrelic';
import SurfaceLink from './SurfaceLink';

const UserJourneyControls = ({ previousStep, nextStep, className }) => {
  const springConfig = {
    mass: 3,
    tension: 160,
    friction: 15,
  };

  const [rightButton, triggerRight] = useBoop({
    x: 20,
    springConfig,
  });
  const [leftButton, triggerLeft] = useBoop({
    x: -20,
    springConfig,
  });

  return (
    <JourneyContainer>
      <JourneyLink
        base={Surface.BASE.SECONDARY}
        to={previousStep.path}
        interactive
        instrumentation={{
          category: 'UserJourney',
          eventName: 'previousStepClick',
          path: previousStep.path,
        }}
        className={className}
        onMouseEnter={triggerLeft}
      >
        <InnerContainer>
          <animated.div style={leftButton}>
            <Icon
              name="fe-arrow-left"
              size="3rem"
              css={css`
                color: var(--system-text-primary);
                margin-right: 2rem;
              `}
            />
          </animated.div>
          <TextContainer>
            <h3>{previousStep.title}</h3>
            <p>{previousStep.body}</p>
          </TextContainer>
        </InnerContainer>
      </JourneyLink>
      <JourneyLink
        base={Surface.BASE.SECONDARY}
        to={nextStep.path}
        interactive
        instrumentation={{
          category: 'UserJourney',
          eventName: 'nextStepClick',
          path: nextStep.path,
        }}
        className={className}
        css={css`
          border: solid 2px var(--brand-button-primary-accent);
          &:hover {
            color: var(--primary-text-color);
            box-shadow: -2px -2px var(--brand-button-primary-accent),
              2px -2px var(--brand-button-primary-accent),
              -2px 2px var(--brand-button-primary-accent),
              2px 2px var(--brand-button-primary-accent), var(--shadow-3);
          }
        `}
        onMouseEnter={triggerRight}
      >
        <InnerContainer
          css={css`
            justify-content: space-between;
          `}
        >
          <TextContainer>
            <h3>{nextStep.title}</h3>
            <p>{nextStep.body}</p>
          </TextContainer>
          <animated.div style={rightButton}>
            <Icon
              name="fe-arrow-right"
              size="3rem"
              css={css`
                color: var(--primary-text-color);
                margin-left: 2rem;
              `}
            />
          </animated.div>
        </InnerContainer>
      </JourneyLink>
    </JourneyContainer>
  );
};

const JourneyContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const JourneyLink = styled(SurfaceLink)`
  color: var(--primary-text-color);
  flex: 1;
  background: var(--secondary-background-color);
  display: block;
  min-height: 130px;
  border-radius: 4px;
  padding: 2rem;
  &:hover {
    color: var(--primary-text-color);
  }

  @media screen and (max-width: 650px) {
    padding: 1.5rem;
  }
  .dark-mode & {
    background: var(--secondary-background-color);
  }
`;

const InnerContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default UserJourneyControls;
