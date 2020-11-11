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

  const { defaultTitle, titleTemplate } = siteMetadata;
  const template = title ? titleTemplate : '%s';

  return (
    <Helmet titleTemplate={template}>
      <title>{title || defaultTitle}</title>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
};

export default SEO;
