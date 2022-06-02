import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Item from './Item';
import { MOBILE_BREAKPOINT } from './config';

const Timeline = ({ children }) => (
  <div
    css={css`
      --timeline-width: 4px;
      --ring-size: 1rem;
      --ring-border-width: var(--timeline-width);
      --timeline-color: var(--border-color);

      display: grid;
      grid-template-columns: auto 1fr;
      grid-column-gap: 2rem;

      @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
        grid-template-columns: auto;
      }
    `}
  >
    {children}
  </div>
);

Timeline.propTypes = {
  children: PropTypes.node,
};

Timeline.Item = Item;

export default Timeline;
