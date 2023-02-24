import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const MobileIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 11 16"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H9C10.1 16 11 15.1 11 14V2C11 0.9 10.1 0 9 0ZM10 11H1V4H10V11ZM9 1H2C1.4 1 1 1.4 1 2V3H10V2C10 1.4 9.6 1 9 1ZM9 15H2C1.4 15 1 14.6 1 14V12H10V14C10 14.6 9.6 15 9 15ZM6 13H5V14H6V13Z"
    />
  </SVG>
);

MobileIcon.propTypes = {
  size: PropTypes.string,
};

export default MobileIcon;
