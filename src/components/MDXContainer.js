import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import {
  MDXCodeBlock,
  ExternalLink,
  Callout,
  Button,
  Icon,
  Video,
} from '@newrelic/gatsby-theme-newrelic';
import { useStaticQuery, graphql } from 'gatsby';
import Collapser from './Collapser';
import CollapserGroup from './CollapserGroup';
import DefaultRelatedContent from './DefaultRelatedContent';
import Table from './Table';
import MDXLink from './MDXLink';
import LandingPageTile from './LandingPageTile';
import LandingPageTileGrid from './LandingPageTileGrid';

const InlineCode = ({ children }) => <code>{children}</code>;

InlineCode.propTypes = {
  children: PropTypes.node,
};

const defaultComponents = {
  a: MDXLink,
  code: MDXCodeBlock,
  pre: (props) => props.children,
  Button,
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
  Table,
  Video,
  DefaultRelatedContent,
};

const MDXContainer = ({
  children,
  className,
  components,
  defaultRelatedContent = null,
}) => {
  const {
    site: { layout },
  } = useStaticQuery(graphql`
    query {
      site {
        layout {
          contentPadding
        }
      }
    }
  `);

  return (
    <div
      className={className}
      css={css`
        > *:first-child {
          margin-top: 0;
        }

        code {
          padding: 0.125rem;
          border-radius: 2px;
        }

        :not(pre) > code {
          background: var(--tertiary-background-color);
        }

        p:last-child {
          margin-bottom: 0;
        }

        p,
        ol,
        ul {
          margin-bottom: 1.5rem;

          &:last-child {
            margin-bottom: 0;
          }
        }

        ol,
        ul {
          margin-top: 0;
          padding-left: 1rem;
        }

        h1,
        h2,
        h3 {
          margin-bottom: 1rem;
        }

        h1,
        h2 {
          font-weight: bold;

          &:not(:first-child) {
            margin-top: 2rem;
          }
        }

        h3,
        h4 {
          margin-top: 1rem;
          font-weight: bold;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          scroll-margin-top: calc(
            var(--global-header-height) + ${layout.contentPadding}
          );
        }

        li:not(:last-child) {
          margin-bottom: 0.75rem;
        }

        ul li ul {
          margin-top: 1rem;
          line-height: 1;
        }
      `}
    >
      <MDXProvider components={{ ...defaultComponents, ...components }}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
      {defaultRelatedContent && defaultRelatedContent}
    </div>
  );
};

MDXContainer.propTypes = {
  className: PropTypes.string,
  components: PropTypes.object,
  children: PropTypes.node,
  defaultRelatedContent: PropTypes.func,
};

export default MDXContainer;
