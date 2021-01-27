import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import {
  MDXCodeBlock,
  ExternalLink,
  Callout,
  Link,
  Button,
  Icon,
  Video,
} from '@newrelic/gatsby-theme-newrelic';
import Collapser from './Collapser';
import CollapserGroup from './CollapserGroup';
import DefaultRelatedContent from './DefaultRelatedContent';
import Table from './Table';
import MDXLink from './MDXLink';
import LandingPageTile from './LandingPageTile';
import LandingPageTileGrid from './LandingPageTileGrid';
import MarkdownContainer from './MarkdownContainer';

const InlineCode = ({ children }) => <code>{children}</code>;

InlineCode.propTypes = {
  children: PropTypes.node,
};

const defaultComponents = {
  a: MDXLink,
  code: MDXCodeBlock,
  pre: (props) => props.children,
  Button,
  ButtonLink: (props) => <Button {...props} as={Link} />,
  Callout,
  Collapser,
  CollapserGroup,
  ExternalLink: (props) => (
    <ExternalLink {...props} onClick={(e) => e.stopPropagation()} />
  ),
  Icon,
  InlineCode,
  LandingPageTile,
  LandingPageTileGrid,
  Link,
  table: Table,
  Video,
  DefaultRelatedContent,
};

const MDXContainer = ({ body, children, className, components }) => {
  return (
    <MarkdownContainer className={className}>
      <MDXProvider components={{ ...defaultComponents, ...components }}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
      {children}
    </MarkdownContainer>
  );
};

MDXContainer.propTypes = {
  className: PropTypes.string,
  body: PropTypes.node,
  components: PropTypes.object,
  children: PropTypes.node,
};

export default MDXContainer;
