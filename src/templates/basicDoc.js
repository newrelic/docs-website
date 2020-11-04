import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import MDXContainer from '../components/MDXContainer';
import SEO from '../components/seo';
import TableOfContents from '../components/TableOfContents';
import {
  ContributingGuidelines,
  PageTools,
} from '@newrelic/gatsby-theme-newrelic';

const H2 = ({ children, ...props }) => {
  return <h2 {...props}>{children}</h2>;
};

H2.propTypes = {
  children: PropTypes.node,
};

const BasicDoc = ({ data }) => {
  const { mdx } = data;
  const {
    frontmatter,
    body,
    fields: { fileRelativePath },
  } = mdx;

  return (
    <>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <div
        css={css`
          display: grid;
          grid-template-areas: 'content page-tools';
          grid-template-columns: minmax(0, 1fr) 320px;
          grid-gap: 2rem;

          @media screen and (max-width: 1240px) {
            grid-template-areas: 'content';
            grid-template-columns: 1fr;
          }
        `}
      >
        <MDXContainer
          components={{ h2: H2 }}
          css={css`
            grid-area: content;
          `}
        >
          {body}
        </MDXContainer>
        <PageTools
          css={css`
            grid-area: page-tools;

            @media screen and (max-width: 1240px) {
              display: none;
            }
          `}
        >
          <ContributingGuidelines fileRelativePath={fileRelativePath} />
          <TableOfContents page={mdx} />
        </PageTools>
      </div>
    </>
  );
};

BasicDoc.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $nav: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
      fields {
        fileRelativePath
      }
      ...TableOfContents_page
    }
    ...MainLayout_query
  }
`;

export default BasicDoc;
