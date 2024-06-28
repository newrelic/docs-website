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
import cx from 'classnames';

import { DocTile, DocTiles } from './DocTile';
import DeveloperIcons from './DeveloperIcons';
import EolPage from './EolPage';
import FunctionDefinition from './FunctionDefinition';
import HeaderLink from './HeaderLink';
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
import OptionReference from './OptionReference';
import PropTypes from 'prop-types';
import React from 'react';
import TechTile from './TechTile';
import UserJourneyControls from './UserJourneyControls';
import WhatsNextTile from './WhatsNextTile';
import TypeDefReference from './TypeDefReference';

const defaultComponents = {
  a: (props) => <MDXLink {...props} displayExternalIcon />,
  img: (props) =>
    props.style || props.variant === 'TechTile' ? (
      <img
        width={props.width ? props.width : 'inherit'}
        src={props.src}
        // this prevents images from stretching when the width is set to a percent value
        className={cx(props.className, props.width && 'unbound')}
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
          // this prevents images from stretching if the width is set to a percent value
          className={cx(props.className, props.width && 'unbound')}
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
  FunctionDefinition,
  HeaderLink,
  HeroContent: ({ children }) => <>{children}</>,
  LandingPageHero,
  LandingPageTile,
  LandingPageTileGrid,
  OptionReference,
  TechTile,
  TechTileGrid: MDXTechTileGrid,
  Button: MDXButton,
  ButtonLink: (props) => <MDXButton as={Link} {...props} />,
  ButtonGroup: MDXButtonGroup,
  DNT: ({ children }) => <>{children}</>, // DoNotTranslate component
  CONTRIBUTOR_NOTE: ContributorNote,
  Tabs: Tabs,
  TabsBar: Tabs.Bar,
  TabsBarItem: Tabs.BarItem,
  TabsPageItem: Tabs.Page,
  TabsPages: Tabs.Pages,
  TypeDefReference,
  InlineSignup,
  InlinePopover,
  InstallFeedback,
  WhatsNextTile,
  Side,
  SideBySide,
  UserJourneyControls,
  EolPage,
  DeveloperIcons,
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
