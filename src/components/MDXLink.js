import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@newrelic/gatsby-theme-newrelic';

const MDXLink = ({ href, ...props }) => <Link to={href} {...props} />;

MDXLink.propTypes = {
  href: PropTypes.string,
};

export default MDXLink;
