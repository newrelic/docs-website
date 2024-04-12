import React, { useState } from 'react';
import { css } from '@emotion/react';
import SurfaceLink from './SurfaceLink';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

const ProductTile = ({ children, to, title, icon }) => {

  return (
    <div css={css`
      background: var(--secondary-background-color);
      height: 138px;
      position: relative;
    `}>
      <SurfaceLink
        css={css`
          background: var(--secondary-background-color);
          color: var(--primary-text-color);
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          left: 0;
          padding: 1.375rem;
          position: absolute;
          top: 0;
          transform: translate(0, 0);
          transition: height 500ms, transform 500ms, width 500ms;
          width: 100%;

          p {
            margin: 0;
          }

          &:hover {
            color: var(--primary-text-color);
            height: 130%;
            transform: translate(-15%, -15%);
            transition: height 500ms, transform 500ms, width 500ms;
            width: 130%;
            z-index: 10;

            .text {
              opacity: 1;
              transition: opacity 200ms;
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
          className='text'
          css={css`
            font-size: 0.875rem;
            line-height: 1.15;
            opacity: 0;
            transition: opacity 200ms;
          `}
        >
          {children}
        </p>
        <Icon
          name={icon}
          size="2rem"
          css={css`
            flex: 1;
            max-height: 1.5625rem;
            align-self: flex-end;
          `}
        />
      </SurfaceLink>
    </div>
  );
};

export default ProductTile;
