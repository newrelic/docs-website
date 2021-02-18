import React from 'react';
import PropTypes from 'prop-types';

import { SEO } from '@newrelic/gatsby-theme-newrelic';

const METADATA = [
  {
    name: 'google-site-verification',
    content: 'eT8TSNhvMuDmAtqbtq5jygZKVkhDmz565fYQ3DVop4g',
  },
];

const DocsSiteSeo = ({ location, title, description }) => {
  const metadata =
    description || title
      ? [
          ...METADATA,
          {
            name: 'description',
            content: description || title,
          },
        ]
      : METADATA;

  return (
    <SEO location={location} title={title}>
      {metadata.map((data) => (
        <meta key={data.name} {...data} />
      ))}
    </SEO>
  );
};

DocsSiteSeo.propTypes = {
  location: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DocsSiteSeo;
