import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { MDXCodeBlock, Callout, Video } from '@newrelic/gatsby-theme-newrelic';

const Wrapper = ({ children }) => (
  <div
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

      li {
        margin-bottom: 1rem;
      }

      ul li ul {
        margin-top: 1rem;
        line-height: 1;
      }
    `}
  >
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node,
};

const components = {
  code: MDXCodeBlock,
  pre: (props) => props.children,
  wrapper: Wrapper,
  Callout,
  Video,
};

const MDXContainer = ({ children }) => (
  <MDXProvider components={components}>
    <MDXRenderer>{children}</MDXRenderer>
  </MDXProvider>
);

MDXContainer.propTypes = {
  children: PropTypes.node,
};

export default MDXContainer;
