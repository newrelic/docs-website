import React from 'react';
import PropTypes from 'prop-types';
import {
  MarkdownContainer,
  MDX,
  ExternalLink,
} from '@newrelic/gatsby-theme-newrelic';
import LandingPageTile from './LandingPageTile';
import LandingPageTileGrid from './LandingPageTileGrid';

const defaultComponents = {
  ExternalLink: (props) => (
    <ExternalLink {...props} onClick={(e) => e.stopPropagation()} />
  ),
  LandingPageTile,
  LandingPageTileGrid,
};

const MDXContainer = ({ body, children, components }) => {
  return (
    <MarkdownContainer>
      <MDX body={body} components={{ ...defaultComponents, ...components }} />
      {children}
    </MarkdownContainer>
  );
};

MDXContainer.propTypes = {
  body: PropTypes.node,
  components: PropTypes.object,
  children: PropTypes.node,
};

export default MDXContainer;
