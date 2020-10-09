import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = ({ title }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
        }
      }
    }
  `);

  return (
    <Helmet titleTemplate={siteMetadata.titleTemplate}>
      <title>{title || siteMetadata.defaultTitle}</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
};

export default SEO;
