import React, { cloneElement } from 'react';
import { Icon, Surface, Tag } from '@newrelic/gatsby-theme-newrelic';
import cx from 'classnames';
import SurfaceLink from './SurfaceLink';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { animated, useTrail } from 'react-spring';

export const DocTile = ({
  children,
  path,
  instrumentation,
  label,
  date,
  number,
  className,
  title,
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

  return (
    <SurfaceLink
      base={Surface.BASE.SECONDARY}
      to={path}
      interactive
      instrumentation={instrumentation}
      className={className}
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
        .dark-mode & {
          background: var(--secondary-background-color);
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
        <div
          css={css`
            display: flex;
            justify-content: space-between;
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
  variant: PropTypes.oneOf(['default', 'labs', 'light']),
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
