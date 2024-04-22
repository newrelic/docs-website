import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const PrivateIcon = (props) => (
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
      d="M13.5 7c-.2 0-.5.1-.8.2L11 8.5v-6c0-.8-.7-1.5-1.5-1.5-.2 0-.4 0-.6.1C8.8.5 8.2 0 7.5 0S6.2.5 6.1 1.1C5.9 1 5.7 1 5.5 1c-.7 0-1.3.5-1.4 1.1-.2-.1-.4-.1-.6-.1C2.7 2 2 2.7 2 3.5V11c0 2.2 1.8 4 4 4h2.5c.8 0 1.5 0 2.5-1s3.6-4.5 3.6-4.5c.2-.3.4-.6.4-1 0-.8-.7-1.5-1.5-1.5zm.3 1.9c-.7 1-2.7 3.6-3.5 4.4-.7.7-1.1.7-1.8.7H6c-1.7 0-3-1.3-3-3V3.5c0-.3.2-.5.5-.5s.5.2.5.5V8h1V2.5c0-.3.2-.5.5-.5s.5.2.5.5V8h1V1.5c0-.3.2-.5.5-.5s.5.2.5.5V8h1V2.5c0-.3.2-.5.5-.5s.5.2.5.5v6c0 .8.9 1.3 1.6.8l1.7-1.2c.1-.1.2-.1.2-.1.3 0 .5.2.5.5 0 .1 0 .2-.2.4z"
      clipRule="evenodd"
    />
  </SVG>
);

PrivateIcon.propTypes = {
  size: PropTypes.string,
};

export default PrivateIcon;
