import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const NotesAddIcon = (props) => (
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
      d="M2 2h12v7h1V1H1v13h8v-1H2V2zm2 2h8v1H4V4zm8 3H4v1h8V7zm-8 3h4v1H4v-1zm10 1v2h2v1h-2v2h-1v-2h-2v-1h2v-2h1z"
      clipRule="evenodd"
    />
  </SVG>
);

NotesAddIcon.propTypes = {
  size: PropTypes.string,
};

export default NotesAddIcon;
