import React from 'react';
import PropTypes from 'prop-types';

import { SEO } from '@newrelic/gatsby-theme-newrelic';

const METADATA = [
  {
    name: 'google-site-verification',
    content: 'He_vizRXYX_mUhwBe3BmyaMxNnVRAZbq_Jtm2A0e4WY',
  },
];

const isStyleGuidePage = (url) => {
  return url.includes('docs/style-guide');
};

const isAgileHandbookPage = (url) => {
  return url.includes('docs/agile-handbook');
};

const isExcludedFromSwiftype = (url) => {
  return isStyleGuidePage(url) || isAgileHandbookPage(url);
};

const DocsSiteSeo = ({
  location,
  title,
  description,
  type,
  tags,
  dataSource,
  disableSwiftype,
}) => (
  <SEO location={location} title={title}>
    {process.env.GATSBY_ENVIRONMENT === 'staging' && (
      <meta name="robots" content="noindex" />
    )}
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

    {dataSource && (
      <meta
        className="swiftype"
        name="dataSource"
        data-type="string"
        content={dataSource}
      />
    )}

    {isExcludedFromSwiftype(location.pathname) && (
      <meta name="st:robots" content="noindex, nofollow" />
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
  dataSource: PropTypes.string,
  tags: PropTypes.array,
  disableSwiftype: PropTypes.bool,
};

export default DocsSiteSeo;
