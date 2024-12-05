import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const UpstreamDeploymentIcon = (props) => (
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
      d="M11 0L6 6h3v3h4V6h3l-5-6zm1 5v3h-2V5H8.1L11 1.6 13.9 5H12zM0 13h3v3h4v-3h3L5 7l-5 6zm6-1v3H4v-3H2.1L5 8.6 7.9 12H6z"
      clipRule="evenodd"
    />
  </SVG>
);

UpstreamDeploymentIcon.propTypes = {
  size: PropTypes.string,
};

export default UpstreamDeploymentIcon;
