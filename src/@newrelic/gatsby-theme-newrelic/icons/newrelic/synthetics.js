import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const SyntheticsIcon = (props) => (
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
      d="M4 9.5c0 .8.7 1.5 1.5 1.5h4c.8 0 1.5-.7 1.5-1.5V8h1V7h-1V5.5c0-.8-.7-1.5-1.5-1.5H8V2.9c.6-.2 1-.8 1-1.4C9 .7 8.3 0 7.5 0S6 .7 6 1.5c0 .7.4 1.2 1 1.4V4H5.5C4.7 4 4 4.7 4 5.5V7H3v1h1v1.5zM7.5 1c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5zm-2 4c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h4c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5h-4zM4 12c-1.1 0-2 .9-2 2v2h1v-2c0-.6.5-1 1-1h7c.6 0 1 .4 1 1v2h1v-2c0-1.1-.9-2-2-2H4zm5-3V8H6v1h3zM8 6h1v1H8V6zM7 6H6v1h1V6z"
      clipRule="evenodd"
    />
  </SVG>
);

SyntheticsIcon.propTypes = {
  size: PropTypes.string,
};

export default SyntheticsIcon;
