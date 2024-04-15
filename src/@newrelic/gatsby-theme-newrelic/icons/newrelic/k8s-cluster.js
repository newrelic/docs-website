import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const K8sClusterIcon = (props) => (
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
      d="M0 7.5C0 3.4 3.4 0 7.5 0S15 3.4 15 7.5 11.6 15 7.5 15 0 11.6 0 7.5zm1 0C1 11.1 3.9 14 7.5 14S14 11.1 14 7.5 11.1 1 7.5 1 1 3.9 1 7.5zm2 0C3 5 5 3 7.5 3S12 5 12 7.5 10 12 7.5 12 3 10 3 7.5zm1 0C4 9.4 5.6 11 7.5 11S11 9.4 11 7.5 9.4 4 7.5 4 4 5.6 4 7.5zM7.5 6C6.7 6 6 6.7 6 7.5S6.7 9 7.5 9 9 8.3 9 7.5 8.3 6 7.5 6zm0 2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z"
      clipRule="evenodd"
    />
  </SVG>
);

K8sClusterIcon.propTypes = {
  size: PropTypes.string,
};

export default K8sClusterIcon;
