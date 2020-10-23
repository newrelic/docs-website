import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Sidebar = ({ className, children }) => (
  <aside
    data-swiftype-index={false}
    className={className}
    css={css`
      padding: 2rem;
      border-right: 1px solid var(--divider-color);

      @media screen and (max-width: 760px) {
        height: 60px;
        border-bottom: 1px solid var(--divider-color);
      }
    `}
  >
    {children}
  </aside>
);
Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Sidebar;
