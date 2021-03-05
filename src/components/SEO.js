import React from 'react';
import PropTypes from 'prop-types';

import { SEO } from '@newrelic/gatsby-theme-newrelic';

const METADATA = [
  {
    name: 'google-site-verification',
    content: 'eT8TSNhvMuDmAtqbtq5jygZKVkhDmz565fYQ3DVop4g',
  },
  {
    className: 'swiftype',
    name: 'type',
    'data-type': 'enum',
    content: 'docs',
  },
];

const DocsSiteSeo = ({ location, title, description, type, tags, disable }) => (
  <SEO location={location} title={title}>
    {disable ? (
      <>
        {METADATA.map((data) => (
          <meta key={data.name} {...data} />
        ))}

        {(tags || []).map((tag) => (
          <meta
            key={tag}
            name="tags"
            className="swiftype"
            data-type="string"
            content={tag}
          />
        ))}

        {type && (
          <meta
            className="swiftype"
            name="document_type"
            data-type="enum"
            content={type}
          />
        )}

        {(description || title) && (
          <meta name="description" content={description || title} />
        )}
      </>
    ) : (
      <meta name="st:robots" content="nofollow, noindex" />
    )}
  </SEO>
);

DocsSiteSeo.propTypes = {
  location: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  tags: PropTypes.array,
  disable: PropTypes.bool,
};

export default DocsSiteSeo;
