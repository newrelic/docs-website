import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { NavItem, Icon } from '@newrelic/gatsby-theme-newrelic';

const SubNavigation = ({ nav }) => (
  <>
    <Link
      to="/"
      css={css`
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        padding: 0.5rem 0;
        margin-bottom: 0.5rem;
        transition: 0.2s ease-out;

        &:hover {
          color: var(--primary-text-hover-color);
        }
      `}
    >
      <Icon
        name="fe-home"
        size="1rem"
        css={css`
          margin-right: 0.5rem;
        `}
      />
      Home
    </Link>
    {nav && (
      <>
        <h2>{nav.title}</h2>
        <nav role="navigation" aria-label="SubNavigation">
          {nav.pages.map((page) => (
            <NavItem key={page.title} page={page} />
          ))}
        </nav>
      </>
    )}
  </>
);

SubNavigation.propTypes = {
  nav: PropTypes.object,
};

export default SubNavigation;
