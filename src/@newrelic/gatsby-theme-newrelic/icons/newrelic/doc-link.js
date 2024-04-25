import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const DocLinkIcon = (props) => (
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
      d="M7 4H1v5h2v1H0V3h12v7H7V9h4V4H7zm2 2v1H5v5h10V7h-2V6h3v7H4V6h5z"
      clipRule="evenodd"
    />
  </SVG>
);

DocLinkIcon.propTypes = {
  size: PropTypes.string,
};

export default DocLinkIcon;
