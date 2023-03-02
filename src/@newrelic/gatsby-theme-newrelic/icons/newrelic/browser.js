import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const BrowserIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 16 15"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 0H2C0.9 0 0 0.9 0 2V12C0 13.1 0.9 14 2 14H13C14.1 14 15 13.1 15 12V2C15 0.9 14.1 0 13 0ZM2 1H13C13.6 1 14 1.4 14 2V4H1V2C1 1.4 1.4 1 2 1ZM2 13H13C13.6 13 14 12.6 14 12V5H1V12C1 12.6 1.4 13 2 13ZM2 2H3V3H2V2ZM5 2H4V3H5V2ZM6 2H7V3H6V2ZM13 2H12V3H13V2Z"
    />
  </SVG>
);

BrowserIcon.propTypes = {
  size: PropTypes.string,
};

export default BrowserIcon;
