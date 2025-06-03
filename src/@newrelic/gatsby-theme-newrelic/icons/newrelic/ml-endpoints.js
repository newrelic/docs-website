import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const MachineLearningEndpointsIcon = (props) => (
  <SVG
    {...props}
    viewBox="-.5 -.5 16 16"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path d="M4.1 5l.8.8 2.8-2.9L4.9 0l-.8.8 1.7 1.6H0v1h5.8L4.1 5z" />
    <path d="M9 2h3.5A1.5 1.5 0 0114 3.5V7H0v4.5A2.5 2.5 0 002.5 14H6v-1H2.5A1.5 1.5 0 011 11.5V8h13v1h1V3.5A2.5 2.5 0 0012.5 1H9v1z" />
    <path d="M12.2 15.3l-.8-.8 1.7-1.6H8v-1h5.1l-1.7-1.6.8-.8 2.8 2.9-2.8 2.9zM3 11h3v-1H3v1zM10 5H9V4h1v1zM11 5h1V4h-1v1z" />
  </SVG>
);

MachineLearningEndpointsIcon.propTypes = {
  size: PropTypes.string,
};

export default MachineLearningEndpointsIcon;
