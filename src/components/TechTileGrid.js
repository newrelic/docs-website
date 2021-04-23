import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const TechTileGrid = ({ className, children }) => (
  <div
    className={className}
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
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TechTileGrid;
