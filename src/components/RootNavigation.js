import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';

const RootNavigation = ({ nav, className }) => {
  return (
    <nav
      role="navigation"
      aria-label="Navigation"
      css={css`
        height: 100%;
        overflow: auto;
        margin: 16px 0;
        padding-bottom: 2rem;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
        span,
        svg {
          color: #afe2e3;
        }
      `}
      id="nav"
      className={className}
    >
      {nav.pages.map((page) => {
        if (page.title === 'section-break') {
          return <hr />;
        }
        if (page.title && !page.url) {
          return (
            <p
              css={css`
                color: #1dcad3;
                margin: 0;
                font-size: 14px;
                margin-top: 1rem;
              `}
            >
              {page.title.toUpperCase()}
            </p>
          );
        }
        return <NavItem key={page.title} name={`${page.url}/`} page={page} />;
      })}
    </nav>
  );
};

RootNavigation.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RootNavigation;
