import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const QueryIcon = (props) => (
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
      d="M13 1H2C.9 1 0 1.9 0 3v10c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm1 12c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5h13v8zM1 4h13V3c0-.6-.4-1-1-1H2c-.6 0-1 .4-1 1v1zm3.4 8.4l2.8-2.9-2.8-2.9-.8.8 2.2 2.1-2.2 2.1.8.8zM12 11H8v1h4v-1z"
      clipRule="evenodd"
    />
  </SVG>
);

QueryIcon.propTypes = {
  size: PropTypes.string,
};

export default QueryIcon;
