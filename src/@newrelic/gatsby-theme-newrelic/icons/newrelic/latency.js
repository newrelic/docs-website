import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const LatencyIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 16 16"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 7.5C1 3.9 3.9 1 7.5 1S14 3.9 14 7.5c0 .5-.1 1-.2 1.5h1c.1-.5.2-1 .2-1.5C15 3.4 11.6 0 7.5 0S0 3.4 0 7.5 3.4 15 7.5 15c.5 0 1-.1 1.5-.2v-1c-.5.1-1 .2-1.5.2C3.9 14 1 11.1 1 7.5zM7 3v6h4V8H8V3H7zm6 9.3l1.6-1.7.8.8-1.7 1.6 1.7 1.6-.8.8-1.6-1.7-1.6 1.7-.8-.8 1.7-1.6-1.7-1.6.8-.8 1.6 1.7z"
    />
  </SVG>
);

LatencyIcon.propTypes = {
  size: PropTypes.string,
};

export default LatencyIcon;
