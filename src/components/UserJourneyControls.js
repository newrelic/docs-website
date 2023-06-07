import React from 'react';
import styled from '@emotion/styled';
import useBoop from 'use-boop';
import { animated } from 'react-spring';
import { css } from '@emotion/react';
import { Surface, Icon } from '@newrelic/gatsby-theme-newrelic';
import SurfaceLink from './SurfaceLink';

const UserJourneyControls = ({ previousStep, nextStep, className }) => {
  const [rightButton, triggerRight] = useBoop({
    x: 20,
    springConfig: {
      mass: 3,
      tension: 160,
      friction: 15,
    },
  });
  const [leftButton, triggerLeft] = useBoop({
    x: -20,
    springConfig: {
      mass: 3,
      tension: 160,
      friction: 15,
    },
  });
  return (
    <JourneyContainer>
      <SurfaceLink
        base={Surface.BASE.SECONDARY}
        to={previousStep.path}
        interactive
        instrumentation={{
          category: 'UserJourney',
          eventName: 'previousStepClick',
          path: previousStep.path,
        }}
        className={className}
        css={css`
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
        `}
        onMouseEnter={triggerLeft}
      >
        <div
          css={css`
            display: flex;
            height: 100%;
            align-items: center;
          `}
        >
          <animated.div style={leftButton}>
            <Icon
              name="fe-arrow-left"
              size="3rem"
              css={css`
                color: var(--system-text-primary);
                margin-right: 2rem;
                .doc-tiles-labs & {
                  display: none;
                }
              `}
            />
          </animated.div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <h3>{previousStep.title}</h3>
            <p>{previousStep.body}</p>
          </div>
        </div>
      </SurfaceLink>
      <SurfaceLink
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
          flex: 1;
          color: var(--primary-text-color);
          background: var(--secondary-background-color);
          display: block;
          min-height: 130px;
          border: solid 2px var(--brand-button-primary-accent);

          border-radius: 4px;
          padding: 2rem;
          &:hover {
            color: var(--primary-text-color);
            /* border: solid 3px var(--brand-button-primary-accent); */
            box-shadow: -2px -2px var(--brand-button-primary-accent),
              2px -2px var(--brand-button-primary-accent),
              -2px 2px var(--brand-button-primary-accent),
              2px 2px var(--brand-button-primary-accent);
          }

          @media screen and (max-width: 650px) {
            padding: 1.5rem;
          }
          .dark-mode & {
            background: var(--secondary-background-color);
          }
        `}
        onMouseEnter={triggerRight}
      >
        <div
          css={css`
            display: flex;
            height: 100%;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <div>
            <h3>{nextStep.title}</h3>
            <p>{nextStep.body}</p>
          </div>
          <animated.div style={rightButton}>
            <Icon
              name="fe-arrow-right"
              size="3rem"
              css={css`
                color: var(--primary-text-color);
                margin-left: 2rem;
                .doc-tiles-labs & {
                  display: none;
                }
              `}
            />
          </animated.div>
        </div>
      </SurfaceLink>
    </JourneyContainer>
  );
};
const JourneyContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

// const JourneyLink = styled.SurfaceLink`
//   color: var(--primary-text-color);
//   flex: 1;
//   background: var(--secondary-background-color);
//   display: block;
//   min-height: 130px;
//   border-radius: 4px;
//   padding: 2rem;
//   &:hover {
//     color: var(--primary-text-color);
//   }

//   @media screen and (max-width: 650px) {
//     padding: 1.5rem;
//   }
//   .dark-mode & {
//     background: var(--secondary-background-color);
//   }
// `;

export default UserJourneyControls;
