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
import { css } from '@emotion/react';

import { DocTile, DocTiles } from './DocTile';
import EolPage from './EolPage';
import LandingPageHero from './LandingPageHero';
import LandingPageTile from './LandingPageTile';
import LandingPageTileGrid from './LandingPageTileGrid';
import InlineSignup from './InlineSignup';
import InlinePopover from './InlinePopover';
import InstallFeedback from './InstallFeedback';
import MDXButton from './MDXButton';
import MDXButtonGroup from './MDXButtonGroup';
import ContributorNote from './ContributorNote';
import MDXTechTileGrid from './MDXTechTileGrid';
import PropTypes from 'prop-types';
import React from 'react';
import TechTile from './TechTile';
import UserJourneyControls from './UserJourneyControls';
import WhatsNextTile from './WhatsNextTile';

const defaultComponents = {
  a: (props) => <MDXLink {...props} displayExternalIcon />,
  img: ({
    alt = 'Docs site',
    className,
    src,
    style = {},
    title,
    variant,
    width,
  }) =>
    style || variant === 'TechTile' ? (
      <img
        width={width || 'inherit'}
        src={src}
        alt={alt}
        title={title}
        className={className}
        style={{ ...style, margin: '0 0.25rem' }}
      />
    ) : (
      <Lightbox>
        <img
          width={width || 'auto'}
          src={src}
          alt={alt}
          title={title}
          className={className}
          style={{
            ...style,
            borderRadius: '0.25rem',
            maxWidth: '100%',
            margin: '0 0.25rem',
          }}
        />
      </Lightbox>
    ),
  DocTile: (props) => (
    <DocTile
      css={css`
        margin: 1rem 0;
      `}
      {...props}
    >
      {props.children}
    </DocTile>
  ),
  DocTiles,
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
  CONTRIBUTOR_NOTE: ContributorNote,
  Tabs: Tabs,
  TabsBar: Tabs.Bar,
  TabsBarItem: Tabs.BarItem,
  TabsPageItem: Tabs.Page,
  TabsPages: Tabs.Pages,
  InlineSignup,
  InlinePopover,
  InstallFeedback,
  WhatsNextTile,
  Side,
  SideBySide,
  UserJourneyControls,
  EolPage,
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
