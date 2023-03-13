import React, { cloneElement } from 'react';
import { Icon, Surface, Tag } from '@newrelic/gatsby-theme-newrelic';
import cx from 'classnames';
import SurfaceLink from './SurfaceLink';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { animated, useTrail } from 'react-spring';

export const DocTile = ({
  children,
  forceLightMode = false,
  path,
  instrumentation,
  label,
  date,
  number,
  className,
}) => (
  <SurfaceLink
    base={Surface.BASE.SECONDARY}
    to={path}
    interactive
    instrumentation={instrumentation}
    className={cx({ forceLightMode }, className)}
    css={css`
      display: block;
      min-height: 130px;
      border-radius: 4px;
      background: var(--secondary-background-color);

      &.forceLightMode {
        background: var(--system-background-surface-1-light);
      }
      &.forceLightMode * {
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
        padding: 2rem;

        @media screen and (max-width: 650px) {
          padding: 1.5rem;
        }
      `}
    >
      <h4
        css={css`
          font-weight: 400;
          font-size: 20px;
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        `}
      >
        {number && (
          <span
            css={css`
              flex: none;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              height: 2rem;
              width: 2rem;
              border-radius: 50%;
              background: var(--brand-button-primary-accent);
              color: var(--system-text-primary-light);
            `}
          >
            {number}
          </span>
        )}
        {children}
      </h4>
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
          `}
        />
      </div>
    </div>
  </SurfaceLink>
);

DocTile.propTypes = {
  label: PropTypes.array,
  date: PropTypes.string,
  instrumentation: PropTypes.object,
  children: PropTypes.node,
  path: PropTypes.string,
  number: PropTypes.number,
  className: PropTypes.string,
  forceLightMode: PropTypes.bool,
};

const SPRING = { tension: 186, friction: 16 };

export const DocTiles = ({
  animated: isAnimated,
  children,
  numbered = false,
}) => {
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
        a {
          margin: 0;
        }
        margin: 1rem 0;
      `}
    >
      {tiles}
    </div>
  );
};

DocTiles.propTypes = {
  animated: PropTypes.bool,
  children: PropTypes.node,
  numbered: PropTypes.bool,
};
