import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from '@newrelic/gatsby-theme-newrelic';

const RootNavigation = ({ nav }) => {
  return (
    <nav role="navigation" aria-label="Navigation">
      <hr />
      {nav.pages.map((page) => {
        if (page.title === 'section-break') {
          return <hr />;
        }
        return <NavItem key={page.title} page={page} />;
      })}
    </nav>
  );
};

RootNavigation.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RootNavigation;
