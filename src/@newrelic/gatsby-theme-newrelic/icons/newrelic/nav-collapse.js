import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { animated, useSpring } from 'react-spring';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';
import { useMainLayoutContext } from '../../../../components/MainLayoutContext';

const ARROW_SPRING = {
  tension: 150,
  friction: 12,
};
const RECT_SPRING = {
  tension: 195,
  friction: 14,
};

const NavCollapseIcon = (props) => {
  const [sidebar] = useMainLayoutContext();
  const [arrowSpring] = useSpring(
    () => ({
      delay: 500,
      from: { rotate: '0deg' },
      to: { rotate: '180deg' },
      reverse: sidebar,
      config: ARROW_SPRING,
    }),
    [sidebar]
  );
  const [rectSpring] = useSpring(
    () => ({
      delay: 280,
      from: { x: '0' },
      to: { x: '14px' },
      reverse: sidebar,
      config: RECT_SPRING,
    }),
    [sidebar]
  );

  return (
    <SVG
      {...props}
      viewBox="0 0 16 16"
      css={css`
        fill: currentColor;
        height: 14px;
        overflow: visible;
        stroke: currentColor;
        stroke-width: 0.25;
        width: 14px;
      `}
    >
      <animated.path
        css={css`
          transform-origin: center;
        `}
        d="M16 8.76923L16 7.23077L6.92308 7.23077L11.0769 3.23077L9.84615 2L4 8L9.84616 14L11.0769 12.7692L6.92308 8.76923L16 8.76923Z"
        style={arrowSpring}
      />
      <animated.rect
        css={css`
          transform-origin: center;
        `}
        width="2"
        height="16"
        style={rectSpring}
      />
    </SVG>
  );
};

NavCollapseIcon.propTypes = {
  size: PropTypes.string,
};

export default NavCollapseIcon;
