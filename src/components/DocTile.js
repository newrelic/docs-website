import React, { cloneElement } from 'react';
import { Button, Icon, Surface, Tag } from '@newrelic/gatsby-theme-newrelic';
import cx from 'classnames';
import SurfaceLink from './SurfaceLink';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { animated, useTrail } from 'react-spring';
import useBoop from 'use-boop';

export const DocTile = ({
  children,
  path,
  instrumentation,
  label,
  date,
  number,
  className,
  title,
  buttonText,
}) => {
  const body = title ? (
    <>
      <h3
        css={css`
          display: flex;
          gap: 1rem;
          font-size: 20px;
          align-items: center;
          margin-bottom: 0;
          .doc-tiles-labs & {
            gap: 0.5ch;
          }
        `}
      >
        {number && <Number>{number}</Number>}
        {title}
      </h3>
      <p
        css={css`
          color: currentColor;
          font-size: 18px;
          margin-bottom: 0.8rem;
        `}
      >
        {children}
      </p>
    </>
  ) : (
    <h4
      css={css`
        font-weight: 400;
        font-size: 20px;
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
      `}
    >
      {number && <Number>{number}</Number>}
      {children}
    </h4>
  );

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
    <SurfaceLink
      base={Surface.BASE.SECONDARY}
      to={path}
      interactive
      instrumentation={instrumentation}
      className={className}
      onMouseEnter={buttonText ? triggerRight : ''}
      css={css`
        color: var(--primary-text-color);
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

        .doc-tiles-default & {
          background: var(--secondary-background-color);
        }
        .dark-mode .doc-tiles-default & {
          background: var(--secondary-background-color);
        }
        .doc-tiles-homepage & {
          max-width: 340px;
          height: 8.25rem;
          background: var(--system-text-primary-light);
          padding: 1rem;
          border-radius: 10px;
          box-shadow: none;
          h4 {
            font-size: 1.25rem;
            color: white;
            font-weight: 300;
            padding: 0;
          }
          button {
            text-decoration: underline;
          }

          &:hover {
            box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 6px -1px,
              rgba(0, 0, 0, 0.1) 0px 2px 4px -1px;
            button,
            svg {
              color: var(--brand-button-primary-accent);
            }
          }
          .dark-mode &:hover {
            box-shadow: unset;
            border: var(--brand-button-primary-accent) solid 1px;
          }

          .dark-mode & {
            border: var(--system-text-primary-light) solid 1px; // prevent shifting on hover
          }

          @media screen and (max-width: 1000px) {
            max-width: unset;
            padding: 0.8rem;
          }

          @media screen and (max-width: 525px) {
            min-height: unset;
            height: 7.8125rem;
            padding: 0.7rem;
            h4 {
              font-size: 1rem;
            }
          }
        }

        .doc-tiles-labs & {
          background: var(--primary-background-color);
          font-size: 20px;
          padding: 1rem;
          & h3 {
            margin-bottom: 1rem;
          }
          & h4 {
            gap: 0.5rem;
          }
        }
        .dark-mode .doc-tiles-labs & {
          background: var(--primary-hover-color);
        }

        .doc-tiles-light & {
          background: var(--system-background-surface-1-light);
        }
        .doc-tiles-light & * {
          color: var(--system-text-primary-light);
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          align-items: space-between;
        `}
      >
        {body}
        {buttonText && (
          <Button
            variant={Button.VARIANT.LINK}
            css={css`
              height: 24px;
              font-size: 16px;
              font-weight: 500;
              align-self: end;
              padding: 1px 8px;
              color: var(--link-color);
            `}
          >
            {buttonText}
            <animated.div style={rightButton}>
              <Icon
                name="fe-arrow-right"
                css={css`
                  color: var(--link-color);
                  margin-left: 8px;
                  margin-top: 2px;
                  size: 1.5rem;
                `}
              />
            </animated.div>
          </Button>
        )}
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            .doc-tiles-homepage & {
              display: none;
          `}
        >
          {label && (
            <Tag
              css={css`
                background: ${label.color};
                color: var(--system-text-primary-light);

                .dark-mode & {
                  background: ${label.color};
                  color: var(--system-text-primary-light);
                }
              `}
            >
              {label.text}
            </Tag>
          )}
          {date && (
            <Tag
              css={css`
                color: var(--primary-text-color);
              `}
            >
              {date}
            </Tag>
          )}
          <Icon
            name="fe-arrow-right"
            css={css`
              color: var(--primary-text-color);
              margin-left: auto;
              .doc-tiles-labs & {
                display: none;
              }
            `}
          />
        </div>
      </div>
    </SurfaceLink>
  );
};

DocTile.propTypes = {
  label: PropTypes.array,
  date: PropTypes.string,
  children: PropTypes.node,
  path: PropTypes.string,
  number: PropTypes.number,
  className: PropTypes.string,
};

const SPRING = { tension: 186, friction: 16 };

export const DocTiles = ({
  className,
  animated: isAnimated,
  children,
  numbered = false,
  variant = 'default',
}) => {
  if (!Array.isArray(children)) {
    children = [children];
  }
  const trails = useTrail(children.length, {
    config: SPRING,
    from: { opacity: 0, y: 124 },
    to: { opacity: 1, y: 0 },
    delay: 400,
  });
  let tiles = numbered
    ? children.map((child, idx) => cloneElement(child, { number: ++idx }))
    : children;

  if (isAnimated) {
    tiles = tiles.map((child, idx) => (
      <animated.div
        css={css`
          display: grid;
          height: 100%;
        `}
        key={idx}
        style={trails[idx]}
      >
        {child}
      </animated.div>
    ));
  }

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
        grid-auto-rows: 1fr;
        grid-gap: 1rem;
        margin: 1rem 0;

        &.doc-tiles-labs {
          grid-template-columns: 1fr;
        }

        a {
          margin: 0;
        }
      `}
      className={cx(className, `doc-tiles-${variant}`)}
    >
      {tiles}
    </div>
  );
};

DocTiles.propTypes = {
  animated: PropTypes.bool,
  children: PropTypes.node,
  numbered: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'labs', 'light', 'homepage']),
};

const Number = styled.span`
  flex: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: var(--brand-button-primary-accent);
  color: var(--system-text-primary-light);

  .doc-tiles-labs & {
    background: transparent;
    color: currentColor;
    height: auto;
    width: auto;

    &::after {
      content: '.';
    }
  }
`;
