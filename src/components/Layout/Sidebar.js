import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { animated } from 'react-spring';

const Sidebar = ({ children, className }) => {
  return (
    <animated.aside
      data-swiftype-index={false}
      css={css`
        grid-area: sidebar;
        border-right: 1px solid var(--divider-color);
        height: calc(100vh - var(--global-header-height));
        position: sticky;
        top: var(--global-header-height);

        @media screen and (max-width: 760px) {
          display: none;
        }
      `}
      className={className}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          padding: var(--site-content-padding);
          overflow: auto;
        `}
      >
        {children}
      </div>
    </animated.aside>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Sidebar;
