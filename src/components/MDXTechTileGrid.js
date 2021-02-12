import React from 'react';
import TechTileGrid from './TechTileGrid';
import { css } from '@emotion/core';

const MDXTechTileGrid = (props) => (
  <TechTileGrid
    {...props}
    css={css`
      &:not(:last-child) {
        margin-bottom: var(--block-element-spacing);
      }
    `}
  />
);

export default MDXTechTileGrid;
