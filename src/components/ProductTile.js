import React, { useState } from 'react';
import { css } from '@emotion/react';
import SurfaceLink from './SurfaceLink';
import { Icon } from '@newrelic/gatsby-theme-newrelic';
import { useSpring, animated, useTransition } from '@react-spring/web';

const ProductTile = ({ children, to, title }) => {
  const [isActive, setIsActive] = useState(false);
  const springConfig = {
    mass: 3,
    tension: 160,
    friction: 15,
  };
  const [style, api] = useSpring(() => {
    scale: 2, springConfig;
  });

  console.log(api);

  return (
    <animated.div style={style}>
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
        `}
        to={to}
        onMouseEnter={() => {
          setIsActive(true);
          api.start({ scale: 1 });
        }}
        onMouseLeave={() => {
          setIsActive(false);
          api.reverse();
        }}
      >
        <p>{title}</p>
        {isActive && <p>{children}</p>}
        <Icon
          name="nr-software"
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
