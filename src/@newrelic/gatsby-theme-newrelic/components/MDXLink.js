import React from 'react';
import PropTypes from 'prop-types';
import { assetPrefix as getAssetPrefix } from '../../../../env';
import { Link } from '@newrelic/gatsby-theme-newrelic';

const MDXLink = ({ href, ...props }) => {
  // this code is a workaround for a bug in Gatsby.
  // when using `assetPrefix` in our gatsby-config,
  // gatsby-plugin-mdx also prefixes MDX links.
  // this breaks all MDX links on i18n sites.
  //
  // see https://github.com/gatsbyjs/gatsby/issues/38362
  //
  // this PR: https://github.com/ably/docs/pull/2108
  // implements a workaround by manually stripping the
  // asset prefix from links.
  // i modified the implementation a bit to be simpler,
  // instead of pulling the `assetPrefix` from GraphQL,
  // we're just going off the BUILD_LANG env variable.
  let cleanHref = href;
  const assetPrefix = getAssetPrefix();

  const brokenAssetPrefix = assetPrefix.replace('://', ':/');

  if (href.startsWith(brokenAssetPrefix)) {
    cleanHref = href.slice(brokenAssetPrefix.length);
  }

  return <Link to={cleanHref} {...props} />;
};

MDXLink.propTypes = {
  href: PropTypes.string,
};

export default MDXLink;
