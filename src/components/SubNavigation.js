import React from 'react';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem';

const SubNavigation = ({ nav }) => (
  <>
    <h2>{nav.title}</h2>
    <nav role="navigation" aria-label="SubNavigation">
      {nav.pages.map((page) => (
        <NavigationItem key={page.title} page={page} />
      ))}
    </nav>
  </>
);

SubNavigation.propTypes = {
  nav: PropTypes.object,
};

export default SubNavigation;
