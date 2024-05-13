import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const NeedsInstrumentationIcon = (props) => (
  <SVG
    {...props}
    viewBox="-1 1 13 13.5"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path
      fillRule="evenodd"
      d="M11 5L5.5 2 0 5v6l5.5 3 5.5-3V5zm-1 .5L5.5 3 1 5.5v5L5.5 13l4.5-2.5v-5z"
      clipRule="evenodd"
    />
  </SVG>
);

NeedsInstrumentationIcon.propTypes = {
  size: PropTypes.string,
};

export default NeedsInstrumentationIcon;
