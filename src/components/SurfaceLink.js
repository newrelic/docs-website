import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Surface } from '@newrelic/gatsby-theme-newrelic';

const SurfaceLink = ({ to, ...props }) => {
  const isRelativeLink = to.startsWith('/');
  const linkProps = isRelativeLink
    ? { to }
    : { href: to, rel: 'noopener noreferrer' };

  return (
    <Surface
      {...props}
      {...linkProps}
      as={isRelativeLink ? Link : 'a'}
      interactive
    />
  );
};

SurfaceLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default SurfaceLink;
