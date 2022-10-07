import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';

const RootNavigation = ({ nav, className }) => {
  const subNav =
    nav.url === '/docs/agile-handbook' || nav.url === '/docs/style-guide';
  return (
    <nav
      role="navigation"
      aria-label="Navigation"
      css={css`
        height: 100%;
        overflow: auto;
        margin-top: 1rem;
        span,
        svg {
          color: #afe2e3;
          font-weight: 700;
        }
        a > span {
          font-weight: 400;
        }
      `}
      id="nav"
      className={className}
    >
      {subNav && <h3>{nav.title}</h3>}
      {nav.pages.map((page) => {
        if (page.title === 'section-break') {
          return <hr />;
        }
        if (page.title && !page.url && !subNav) {
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
        return <NavItem key={page.title} name={page.url} page={page} />;
      })}
    </nav>
  );
};

RootNavigation.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RootNavigation;
