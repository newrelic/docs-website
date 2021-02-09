import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const TechTileGrid = ({ children }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      grid-gap: 1rem;
    `}
  >
    {children}
  </div>
);

TechTileGrid.propTypes = {
  children: PropTypes.node,
};

export default TechTileGrid;
