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
import toString from 'mdast-util-to-string';
import DefaultRelatedContent from '../components/DefaultRelatedContent';

const BasicDoc = ({ data }) => {
  const { mdx } = data;
  const {
    mdxAST,
    frontmatter,
    body,
    fields: { fileRelativePath },
  } = mdx;

  const moreHelpExists = mdxAST.children.find(
    (node) => node.type === 'heading' && toString(node) === 'For more help'
  );

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
          css={css`
            grid-area: content;
          `}
          body={body}
        >
          {moreHelpExists ? null : <DefaultRelatedContent />}
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
      mdxAST
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
