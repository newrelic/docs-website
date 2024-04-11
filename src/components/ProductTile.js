import React, { useState } from 'react';
import { css } from '@emotion/react';
import SurfaceLink from './SurfaceLink';
import { Icon } from '@newrelic/gatsby-theme-newrelic';
import { useSpring, animated } from '@react-spring/web';

const ProductTile = ({ children, to, title, icon }) => {
  const [tileStyle, tileApi] = useSpring(() => {});
  const [textStyle, textApi] = useSpring(() => {});

  return (
    <animated.div style={tileStyle}>
      <SurfaceLink
        css={css`
          height: 138px;
          padding: 1.375rem;
          color: var(--primary-text-color);
          background: var(--secondary-background-color);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          p {
            margin: 0;
          }
          &:hover {
            color: var(--primary-text-color);
          }
        `}
        to={to}
        onMouseEnter={() => {
          tileApi.start({
            from: { scale: 1 },
            to: { scale: 1.25 },
          });
          textApi.start({
            from: { opacity: 0 },
            to: { opacity: 1 },
          });
        }}
        onMouseLeave={() => {
          tileApi.start({
            from: { scale: 1.25 },
            to: { scale: 1 },
          });
          textApi.start({ from: { opacity: 1 }, to: { opacity: 0 } });
        }}
      >
        <p
          css={css`
            font-size: 1.25rem;
          `}
        >
          {title}
        </p>

        <animated.div
          style={textStyle}
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <p
            css={css`
              font-size: 0.875rem;
              line-height: 1.15;
            `}
          >
            {children}
          </p>
        </animated.div>
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
    </animated.div>
  );
};

export default ProductTile;
