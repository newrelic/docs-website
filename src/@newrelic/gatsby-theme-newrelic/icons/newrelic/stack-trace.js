import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const StackTraceIcon = (props) => (
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
      d="M12 1H4v1h8V1zM4 4h8v1H4V4zm10 9H2V7H1v7h14V7h-1v6zM4 10h8v1H4v-1zm8-3H4v1h8V7z"
    />
  </SVG>
);

StackTraceIcon.propTypes = {
  size: PropTypes.string,
};

export default StackTraceIcon;
