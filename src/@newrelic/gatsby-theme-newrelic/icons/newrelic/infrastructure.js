import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const InfrastructureIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 18 18"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0H5C6.1 0 7 0.9 7 2V14C7 15.1 6.1 16 5 16H2C0.9 16 0 15.1 0 14V2C0 0.9 0.9 0 2 0ZM5 15C5.6 15 6 14.6 6 14V2C6 1.4 5.6 1 5 1H2C1.4 1 1 1.4 1 2V14C1 14.6 1.4 15 2 15H5ZM5 3H2V4H5V3ZM5 5H2V6H5V5ZM11 0H14C15.1 0 16 0.9 16 2V14C16 15.1 15.1 16 14 16H11C9.9 16 9 15.1 9 14V2C9 0.9 9.9 0 11 0ZM14 15C14.6 15 15 14.6 15 14V2C15 1.4 14.6 1 14 1H11C10.4 1 10 1.4 10 2V14C10 14.6 10.4 15 11 15H14ZM14 3H11V4H14V3ZM14 5H11V6H14V5Z"
    />
  </SVG>
);

InfrastructureIcon.propTypes = {
  size: PropTypes.string,
};

export default InfrastructureIcon;
