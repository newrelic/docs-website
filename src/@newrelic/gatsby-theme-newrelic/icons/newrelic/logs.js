import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const LogsIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 11 16"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 11V12H3V11H6ZM8 8V9H3V8H8ZM5.7 0H0V15H11V5.3L5.7 0ZM6 1.7L9.3 5H6V1.7ZM10 14H1V1H5V6H10V14Z"
    />
  </SVG>
);

LogsIcon.propTypes = {
  size: PropTypes.string,
};

export default LogsIcon;
