import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

import SurfaceLink from './SurfaceLink';

const ProductTile = ({ children, icon, title, to }) => {
  const [textWidth, setTextWidth] = useState('');
  const [titleWidth, setTitleWidth] = useState('');
  const titleRef = useRef(null);

  // Used to calc the width of the text box each time a user hovers over a tile
  // this ensures resizing the screen won't allow text to clip behind parent.
  const calcTextWidth = () => {
    const textRect = document.querySelector('.productText').getBoundingClientRect();
    setTextWidth(textRect.width);
  };

  useEffect(() => {
    if (!titleRef.current) {
      return null;
    }

    const titleRect = titleRef.current.getBoundingClientRect();

    setTitleWidth(titleRect.width);
  }, []);

  return (
    <div
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
        onMouseEnter={calcTextWidth}
        css={css`
          background: var(--secondary-background-color);
          color: var(--primary-text-color);
          display: flex;
          flex-direction: column;
          height: 100%;
          left: 0;
          overflow: hidden;
          padding: 1.375rem;
          padding-top: 1.125rem;
          position: absolute;
          top: 0;
          transform: translate(0, 0);
          transition: height 500ms, transform 500ms, width 500ms;
          width: 100%;
          border-radius: 10px;
          box-shadow: none;

          .productText {
            font-size: 14px;
            line-height: 24px;
            margin: 0;
            opacity: 0;
            overflow: visible;
            width: 130%
          }

          .title {
            font-size: 20px;
            font-weight: 400;
            margin-bottom: 0.5rem;
            width: ${titleWidth}px;
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
            .hover-show {
              display: block;
            }

            .productText {
              opacity: 1;
              transition: opacity 500ms;
              width: ${textWidth}px;
            }
          }

          .dark-mode &:hover {
            box-shadow: unset;
            border: var(--brand-button-primary-accent) solid 1px;
          }

          .dark-mode & {
            border: var(--secondary-background-color) solid 1px; // prevent shifting on hover
          }
        `}
        to={to}
      >
        <h3
          className="title"
          ref={titleRef}
        >
          {title}
        </h3>
        <p
          className="productText"
        >
          {children}
        </p>
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
};

export default ProductTile;
