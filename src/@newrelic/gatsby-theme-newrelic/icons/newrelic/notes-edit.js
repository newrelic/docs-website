import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const NotesEditIcon = (props) => (
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
      d="M14 2H2v11h5v1H1V1h14v4h-1V2zm-2 2H4v1h8V4zM4 7h3v1H4V7zm3 3H4v1h3v-1zm6.5-3L16 9.5 11.5 14H9v-2.5L13.5 7zM10 11.9V13h1.1l3.5-3.5-1.1-1.1-3.5 3.5zm6 3.1H9v1h7v-1z"
      clipRule="evenodd"
    />
  </SVG>
);

NotesEditIcon.propTypes = {
  size: PropTypes.string,
};

export default NotesEditIcon;
