import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const LandingPageTileGrid = ({ children }) => (
  <div
    css={css`
      display: grid;
      // 375px is about the size of an iPhone 6/7/8 screen
      grid-template-columns: repeat(
        auto-fit,
        minmax(calc(375px - (2 * var(--site-content-padding))), 1fr)
      );
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
