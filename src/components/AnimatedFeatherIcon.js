import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { animated } from 'react-spring';
import featherIcons from '../@newrelic/gatsby-theme-newrelic/icons/feather';

const AnimatedFeatherIcon = ({ name, size, style, ...props }) => {
  const FeatherIcon = featherIcons[name.split('fe-').pop()];
  return (
    <animated.svg
      {...props}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      css={css`
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        width: ${size};
        height: ${size};
      `}
    >
      {FeatherIcon}
    </animated.svg>
  );
};

AnimatedFeatherIcon.propTypes = {
  defs: PropTypes.node,
  title: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
};

AnimatedFeatherIcon.defaultProps = {
  size: '1em',
};

export default AnimatedFeatherIcon;
