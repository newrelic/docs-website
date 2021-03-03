import React from 'react';
import { Link, Surface } from '@newrelic/gatsby-theme-newrelic';

const SurfaceLink = (props) => {
  return <Surface {...props} as={Link} interactive />;
};

export default SurfaceLink;
