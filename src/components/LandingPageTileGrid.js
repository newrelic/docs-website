import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const LandingPageTileGrid = ({ children }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-gap: 2.75rem 1rem;
      margin: 3rem 0 2rem;
    `}
  >
    {children}
  </div>
);

LandingPageTileGrid.propTypes = {
  children: PropTypes.node,
};

export default LandingPageTileGrid;
