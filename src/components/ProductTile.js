import React from 'react';
import { css } from '@emotion/react';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

import SurfaceLink from './SurfaceLink';

const ProductTile = ({ children, icon, title, to }) => (
  <div
    id="productTile"
    css={css`
      background: var(--secondary-background-color);
      border-radius: 10px;
      height: 8.625rem;
      margin: 1.5rem 0.5rem;
      position: relative;
      width: calc(25% - 1rem);

      @media screen and (max-width: 1439px) {
        width: calc(33% - 1rem);
      }

      @media screen and (max-width: 1000px) {
        width: calc(50% - 1rem);
      }

      @media screen and (max-width: 600px) {
        flex: 0 1 100%;
      }
    `}
  >
    <SurfaceLink
      css={css`
        background: var(--secondary-background-color);
        box-shadow: none;
        container-type: size;
        color: var(--primary-text-color);
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: flex-start;
        left: 0;
        overflow: hidden;
        padding-top: 1.125rem;
        padding: 1.375rem;
        position: absolute;
        top: 0;
        transition: scale 500ms, transform 500ms;
        transition-timing-function: linear;
        width: 100%;

        .inverse-transform-container {
          scale: 1;
          transform-origin: top center;
          translate: 0 0;
          transition: scale 500ms, translate 500ms;
          transition-timing-function: linear;
          width: 130%;
        }

        .productText {
          font-size: 14px;
          line-height: 24px;
          margin: 0;
          opacity: 0;
          overflow: visible;
          width: 100%;
        }

        .title {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.5;
          margin-bottom: 0.5rem;
          padding-right: 30%;
          width: 100%;
        }

        svg {
          scale: 1;
          transition: scale 500ms;
        }

        @media screen and (min-width: 1001px) {
          &:hover {
            color: var(--primary-text-color);
            scale: 1.3;
            transition: scale 500ms, transform 500ms;
            z-index: 10;

            .hover-hide {
              display: none;
            }
            .hover-show {
              display: block;
            }

            .inverse-transform-container {
              translate: -15cqw -7.5cqh;
              scale: calc(1 / 1.3);
              transition: scale 500ms, translate 500ms;
            }

            .productText {
              opacity: 1;
              transition: opacity 500ms;
            }

            svg {
              scale: calc(1 / 1.3);
              transition: scale 500ms;
            }
          }

          .dark-mode &:hover {
            box-shadow: unset;
            border: var(--brand-button-primary-accent) solid 1px;
          }
        }

        .dark-mode & {
          border: var(--secondary-background-color) solid 1px; // prevent shifting on hover
        }
      `}
      to={to}
    >
      <div className="inverse-transform-container">
        <h3 className="title">{title}</h3>
        <p className="productText">{children}</p>
      </div>
      <Icon
        name={icon}
        size="20px"
        className="hover-hide product-icon"
        css={css`
          align-self: flex-end;
          bottom: 1rem;
          flex: 1;
          position: absolute;
          right: 1rem;
        `}
      />
      <Icon
        name="fe-arrow-right"
        size="1.5rem"
        className="hover-show"
        css={css`
          align-self: flex-end;
          bottom: 1rem;
          display: none;
          flex: 1;
          max-height: 1.5625rem;
          position: absolute;
          right: 1rem;
        `}
      />
    </SurfaceLink>
  </div>
);

export default ProductTile;
