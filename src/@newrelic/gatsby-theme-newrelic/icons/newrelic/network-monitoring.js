import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const NetworkMonitoringIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 15 15"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 5V0H8V4H5V0H0V5H4V8H0V13H5V9H8V13H13V8H9V5H13ZM9 1H12V4H9V1ZM4 12H1V9H4V12ZM4 4H1V1H4V4ZM8 8H5V5H8V8ZM12 9V12H9V9H12Z"
    />
  </SVG>
);

NetworkMonitoringIcon.propTypes = {
  size: PropTypes.string,
};

export default NetworkMonitoringIcon;
