import React from 'react';
import PropTypes from 'prop-types';

import { SEO } from '@newrelic/gatsby-theme-newrelic';

const METADATA = [
  {
    name: 'google-site-verification',
    content: 'eT8TSNhvMuDmAtqbtq5jygZKVkhDmz565fYQ3DVop4g',
  },
];

const DocsSiteSeo = ({
  location,
  title,
  description,
  type,
  tags,
  disableSwiftype,
}) => (
  <SEO location={location} title={title}>
    {disableSwiftype && <meta name="st:robots" content="nofollow, noindex" />}
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

    {title && (
      <meta
        className="swiftype"
        name="title"
        data-type="string"
        content={title}
      />
    )}

    {(description || title) && (
      <meta name="description" content={description || title} />
    )}
  </SEO>
);

DocsSiteSeo.propTypes = {
  location: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  tags: PropTypes.array,
  disableSwiftype: PropTypes.bool,
};

export default DocsSiteSeo;
