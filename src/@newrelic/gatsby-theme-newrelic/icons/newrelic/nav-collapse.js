import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SVG from '@newrelic/gatsby-theme-newrelic/src/components/SVG';

const NavCollapseIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 16 13"
    css={css`
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 0.25;
    `}
  >
    <path d="M10 12L14 12L14 1L10 1L10 4.37114e-07L15 0L15 13L10 13L10 12ZM5.4 9.6L4.6 10.4L0.8 6.5L4.6 2.6L5.4 3.4L2.7 6L12 6L12 7L2.7 7L5.4 9.6Z" />
  </SVG>
);

NavCollapseIcon.propTypes = {
  size: PropTypes.string,
};

export default NavCollapseIcon;
