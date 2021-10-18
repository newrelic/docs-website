import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from '@newrelic/gatsby-theme-newrelic';

const RootNavigation = ({ nav }) => {
  const pages = nav.pages;

  return (
    <nav role="navigation" aria-label="Navigation">
      {pages.map((page) => (
        <NavItem key={page.title} page={page} />
      ))}
      <NavItem page={{ title: 'Release notes', url: '/docs/release-notes' }} />
      <NavItem page={{ title: "What's new", url: '/whats-new' }} />
      <NavItem
        page={{
          title: 'See our 370+ integrations',
          url: 'https://newrelic.com/integrations',
        }}
      />
    </nav>
  );
};

RootNavigation.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RootNavigation;
