import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';

const SubNavigation = ({ nav }) => {
  return (
    <>
      {nav && (
        <div
          css={css`
            margin-top: 1rem;
          `}
        >
          <h2>{nav.title}</h2>
          <nav>
            {nav.pages.map((page) => (
              <NavItem key={page.title} page={page} />
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
