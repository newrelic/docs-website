import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const MonitoringIcon = (props) => (
  <SVG
    {...props}
    viewBox="-.5 -.5 16 16"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path
      fillRule="evenodd"
      d="M2 1h11c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H8v2h3v1H4v-1h3v-2H2c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zm11 10c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1H2c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h11zM2 5h1v5H2V5zm3-2H4v7h1V3zm1 1h1v6H6V4zm3 1H8v5h1V5zm1 2h1v3h-1V7zm3-2h-1v5h1V5z"
      clipRule="evenodd"
    />
  </SVG>
);

MonitoringIcon.propTypes = {
  size: PropTypes.string,
};

export default MonitoringIcon;
