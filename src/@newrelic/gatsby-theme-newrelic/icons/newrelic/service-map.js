import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const ServiceMapIcon = (props) => (
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
      d="M11 1v1.5H8.5A.5.5 0 008 3v4.5H5V6H1v4h4V8.5h3V13a.5.5 0 00.5.5H11V15h4v-4h-4v1.5H9v-9h2V5h4V1h-4zm3 1h-2v2h2V2zM4 7H2v2h2V7zm8 5h2v2h-2v-2z"
      clipRule="evenodd"
    />
  </SVG>
);

ServiceMapIcon.propTypes = {
  size: PropTypes.string,
};

export default ServiceMapIcon;
