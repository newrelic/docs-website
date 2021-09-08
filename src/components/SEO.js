import React from 'react';
import PropTypes from 'prop-types';

import { SEO } from '@newrelic/gatsby-theme-newrelic';

const METADATA = [
  {
    name: 'google-site-verification',
    content: 'He_vizRXYX_mUhwBe3BmyaMxNnVRAZbq_Jtm2A0e4WY',
  },
];

const crazyEgg = (location) => {
  const { pathname } = location;
  const homepage = '/';
  const signup =
    '/docs/accounts/accounts-billing/account-setup/create-your-new-relic-account/';

  if (pathname === homepage || pathname === signup) {
    return (
      <script
        type="text/javascript"
        src="//script.crazyegg.com/pages/scripts/0045/9836.js"
        async="async"
      />
    );
  }
};

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

    {crazyEgg(location)}
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
