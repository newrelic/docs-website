import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const AttachmentIcon = (props) => (
  <SVG
    {...props}
    viewBox="-.5 -.5 16 18"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path
      fillRule="evenodd"
      d="M13 4H4C1.8 4 0 5.8 0 8s1.8 4 4 4h8v-1H4c-1.7 0-3-1.3-3-3s1.3-3 3-3h9c1.1 0 2 .9 2 2s-.9 2-2 2H6c-.6 0-1-.4-1-1s.4-1 1-1h6V6H6c-1.1 0-2 .9-2 2s.9 2 2 2h7c1.7 0 3-1.3 3-3s-1.3-3-3-3z"
      clipRule="evenodd"
    />
  </SVG>
);

AttachmentIcon.propTypes = {
  size: PropTypes.string,
};

export default AttachmentIcon;
