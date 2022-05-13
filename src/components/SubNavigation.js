import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from '@newrelic/gatsby-theme-newrelic';

const SubNavigation = ({ nav }) => {
  return (
    <>
      {nav && (
        <>
          <h2>{nav.title}</h2>
          <nav>
            {nav.pages.map((page) => (
              <NavItem key={page.title} page={page} />
            ))}
          </nav>
        </>
      )}
    </>
  );
};

SubNavigation.propTypes = {
  nav: PropTypes.object,
};

export default SubNavigation;
