import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';

const SubNavigation = ({ nav, className }) => {
  return (
    <>
      {nav && (
        <div
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
              color: #1CE783;
            }
          `}
          className={className}
        >
          <p
            css={css`
              color: #1dcad3;
              margin: 0;
              font-size: 14px;
              margin-top: 1rem;
            `}
          >
            {nav.title.toUpperCase()}
          </p>
          <nav>
            {nav.pages.map((page) => (
              <NavItem key={page.title} name={`${page.url}/`} page={page} />
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

SubNavigation.propTypes = {
  nav: PropTypes.object,
};

export default SubNavigation;
