import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';

const MDXLink = ({ href, ...props }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  if (href.startsWith(siteUrl)) {
    href = href.replace(siteUrl, '');
  }

  if (href.startsWith('/') || href.startsWith('#')) {
    return <Link to={href} {...props} />;
  }

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
};

MDXLink.propTypes = {
  href: PropTypes.string,
};

export default MDXLink;
