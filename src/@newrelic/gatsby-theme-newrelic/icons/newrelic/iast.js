import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const IASTIcon = (props) => (
  <SVG
    {...props}
    viewBox="-.5 -.5 16 16"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path d="M0 4l7.5-4 5.982 3.19-1.033.575L7.5 1.1 1 4.6v6.8l5 2.692V15.2L0 12V4zM7.5 16v-1.1l6.5-3.5V4.6l-.005-.003.996-.602L15 4v8l-7.5 4z" />
    <path
      fillRule="evenodd"
      d="M10.866 6.34l-4.044 4.356-2.651-2.32.658-.752 1.92 1.68 3.385-3.644.732.68z"
      clipRule="evenodd"
    />
  </SVG>
);

IASTIcon.propTypes = {
  size: PropTypes.string,
};

export default IASTIcon;
