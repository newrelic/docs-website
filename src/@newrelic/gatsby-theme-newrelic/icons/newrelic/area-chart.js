import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const AreaChartIcon = (props) => (
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
      d="M2 1v12h13v1H1V1h1zm12 1.293V11H4V8.5l3.5-3.7 1.995 1.997L14 2.293zm-1.001 2.415L9.495 8.211 7.519 6.234l-2.52 2.664V10h8V4.708z"
      clipRule="evenodd"
    />
  </SVG>
);

AreaChartIcon.propTypes = {
  size: PropTypes.string,
};

export default AreaChartIcon;
