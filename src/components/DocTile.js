import React, { cloneElement } from 'react';
import { Icon, Surface, Tag } from '@newrelic/gatsby-theme-newrelic';
import SurfaceLink from './SurfaceLink';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export const DocTile = ({
  children,
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
    css={css`
      display: block;
      min-height: 130px;
      border-radius: 4px;
      background: var(--secondary-background-color);

      .dark-mode & {
        background: var(--secondary-background-color);
      }
    `}
    className={className}
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
};

export const DocTiles = ({ children, numbered = false }) => (
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
    {numbered
      ? children.map((child, idx) => cloneElement(child, { number: ++idx }))
      : children}
  </div>
);

DocTiles.propTypes = {
  children: PropTypes.node,
  numbered: PropTypes.bool,
};
