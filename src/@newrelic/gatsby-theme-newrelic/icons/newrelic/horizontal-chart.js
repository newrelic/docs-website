import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const HorizontalChartIcon = (props) => (
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
      d="M1 5v6h14V5H1zm11 1H8v4h4V6zm1 0v4h1V6h-1zM2 6h5v4H2V6z"
      clipRule="evenodd"
    />
  </SVG>
);

HorizontalChartIcon.propTypes = {
  size: PropTypes.string,
};

export default HorizontalChartIcon;
