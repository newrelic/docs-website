import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const AlertsAiIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 16 16"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.5;
    `}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 0H11L15 4V11L11 15H4L0 11V4L4 0ZM10.6 14L14 10.6V4.4L10.6 1H4.4L1 4.4V10.6L4.4 14H10.6ZM7 10H8V12H7V10ZM8 3H7V8H8V3Z"
    />
  </SVG>
);

AlertsAiIcon.propTypes = {
  size: PropTypes.string,
};

export default AlertsAiIcon;
