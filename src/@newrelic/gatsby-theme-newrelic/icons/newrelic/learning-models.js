import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const LearningModelsIcon = (props) => (
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
      d="M4 5.95a2.5 2.5 0 10-1 0v2.387A3.5 3.5 0 107.965 12h2.085a2.5 2.5 0 100-1H7.965a3.5 3.5 0 00-1.449-2.361 4.001 4.001 0 013.54-3.615 2.5 2.5 0 10-.01-1.004 5.003 5.003 0 00-4.477 4.146A3.498 3.498 0 004 8.036V5.95zM3.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7.5-.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-8-4a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
      clipRule="evenodd"
    />
  </SVG>
);

LearningModelsIcon.propTypes = {
  size: PropTypes.string,
};

export default LearningModelsIcon;
