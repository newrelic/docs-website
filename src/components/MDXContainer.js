import React from 'react';
import PropTypes from 'prop-types';
import {
  MarkdownContainer,
  MDX,
  ExternalLink,
  Link,
} from '@newrelic/gatsby-theme-newrelic';
import LandingPageHero from './LandingPageHero';
import LandingPageTile from './LandingPageTile';
import LandingPageTileGrid from './LandingPageTileGrid';
import TechTile from './TechTile';
import MDXTechTileGrid from './MDXTechTileGrid';
import MDXButton from './MDXButton';
import MDXButtonGroup from './MDXButtonGroup';

const defaultComponents = {
  ExternalLink: (props) => (
    <ExternalLink {...props} onClick={(e) => e.stopPropagation()} />
  ),
  HeroContent: ({ children }) => <>{children}</>,
  LandingPageHero,
  LandingPageTile,
  LandingPageTileGrid,
  TechTile,
  TechTileGrid: MDXTechTileGrid,
  Button: MDXButton,
  ButtonLink: (props) => <MDXButton as={Link} {...props} />,
  ButtonGroup: MDXButtonGroup,
  DoNotTranslate: ({ children }) => <>{children}</>,
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
