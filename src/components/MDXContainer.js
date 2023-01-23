import {
  ExternalLink,
  Link,
  Lightbox,
  MDXLink,
  MDX,
  MarkdownContainer,
  Tabs,
  SideBySide,
  Side,
} from '@newrelic/gatsby-theme-newrelic';

import LandingPageHero from './LandingPageHero';
import LandingPageTile from './LandingPageTile';
import LandingPageTileGrid from './LandingPageTileGrid';
import InstallFeedback from './InstallFeedback';
import MDXButton from './MDXButton';
import MDXButtonGroup from './MDXButtonGroup';
import MDXTechTileGrid from './MDXTechTileGrid';
import PropTypes from 'prop-types';
import React from 'react';
import TechTile from './TechTile';
import WhatsNextTile from './WhatsNextTile';

const defaultComponents = {
  a: (props) => <MDXLink {...props} displayExternalIcon />,
  img: (props) =>
    props.style || props.variant === 'TechTile' ? (
      <img
        width={props.width ? props.width : 'inherit'}
        src={props.src}
        alt={props.alt ? props.alt : 'Docs site'}
        title={props.title}
        style={
          props.style
            ? { ...props.style, margin: '0 0.25rem' }
            : { margin: '0 0.25rem' }
        }
      />
    ) : (
      <Lightbox>
        <img
          width={props.width ? props.width : 'auto'}
          src={props.src}
          alt={props.alt ? props.alt : 'Docs site'}
          title={props.title}
          style={
            props.style
              ? {
                  ...props.style,
                  borderRadius: '0.25rem',
                  maxWidth: '100%',
                  margin: '0 0.25rem',
                }
              : {
                  borderRadius: '0.25rem',
                  maxWidth: '100%',
                  margin: '0 0.25rem',
                }
          }
        />
      </Lightbox>
    ),
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
  Tabs: Tabs,
  TabsBar: Tabs.Bar,
  TabsBarItem: Tabs.BarItem,
  TabsPageItem: Tabs.Page,
  TabsPages: Tabs.Pages,
  InstallFeedback,
  WhatsNextTile,
  Side,
  SideBySide,
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
