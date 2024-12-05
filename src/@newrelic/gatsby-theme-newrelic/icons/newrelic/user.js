import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const UserIcon = (props) => (
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
      d="M8 8c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0-7c1.7 0 3 1.3 3 3S9.7 7 8 7 5 5.7 5 4s1.3-3 3-3zm0 9c3.9 0 7 1.3 7 3v3h-1v-3c0-.7-2.3-2-6-2s-6 1.3-6 2v3H1v-3c0-1.7 3.1-3 7-3z"
      clipRule="evenodd"
    />
  </SVG>
);

UserIcon.propTypes = {
  size: PropTypes.string,
};

export default UserIcon;
