import React from 'react';
import PropTypes from 'prop-types';

import { SEO } from '@newrelic/gatsby-theme-newrelic';

const metadata = [{ name: 'google-site-verification', content: '' }];

const DocsSiteSeo = ({ location }) => (
  <SEO location={location}>
    {metadata.map((data) => (
      <meta key={data.name} {...data} />
    ))}
  </SEO>
);

DocsSiteSeo.propTypes = {
  location: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default DocsSiteSeo;
