import React from 'react';
import PropTypes from 'prop-types';

import { SEO } from '@newrelic/gatsby-theme-newrelic';
import { Helmet } from 'react-helmet';

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

const DocsSiteSeo = ({ location, title, description, type, tags, disable }) =>
  disable ? (
    <Helmet>
      <meta name="robots" content="nofollow, noindex" />
    </Helmet>
  ) : (
    <SEO location={location} title={title}>
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
