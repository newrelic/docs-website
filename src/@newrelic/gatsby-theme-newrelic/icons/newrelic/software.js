import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const SoftwareIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 16 16"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path d="M8.25 9H3V4h9L8.25 9z" />
    <path
      fillRule="evenodd"
      d="M13 1c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H8v2h3v1H4v-1h3v-2H2c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h11zM2 2c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h11c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1H2z"
      clipRule="evenodd"
    />
  </SVG>
);

SoftwareIcon.propTypes = {
  size: PropTypes.string,
};

export default SoftwareIcon;
