import React from 'react';
import { css } from '@emotion/react';
import SurfaceLink from './SurfaceLink';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

const ProductTile = ({ children, to, title, icon }) => {
  return (
    <div
      css={css`
        background: var(--secondary-background-color);
        height: 138px;
        position: relative;
      `}
    >
      <SurfaceLink
        css={css`
          background: var(--secondary-background-color);
          color: var(--primary-text-color);
          display: flex;
          flex-direction: column;
          height: 100%;
          left: 0;
          padding: 1.375rem;
          position: absolute;
          top: 0;
          transform: translate(0, 0);
          transition: height 500ms, transform 500ms, width 500ms;
          width: 100%;

          p {
            margin: 0;
            overflow: visible;
            width: 250px;
          }

          &:hover {
            color: var(--primary-text-color);
            height: 130%;
            transform: translate(-10%, -10%);
            transition: height 500ms, transform 500ms, width 500ms;
            width: 130%;
            z-index: 10;

            .hover-hide {
              display: none;
            }

            .text {
              opacity: 1;
              transition: opacity 500ms;
            }
          }
        `}
        to={to}
      >
        <p
          css={css`
            font-size: 1.25rem;
          `}
        >
          {title}
        </p>
        <p
          className="text"
          css={css`
            font-size: 0.875rem;
            line-height: 1.5rem;
            opacity: 0;
            transition: opacity 325ms;
          `}
        >
          {children}
        </p>
        <Icon
          name={icon}
          size="1rem"
          className="hover-hide"
          css={css`
            align-self: flex-end;
            bottom: 1rem;
            flex: 1;
            max-height: 1.5625rem;
            position: absolute;
            right: 1rem;
          `}
        />
      </SurfaceLink>
    </div>
  );
};

export default ProductTile;
