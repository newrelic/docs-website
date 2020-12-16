import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import PageTitle from '../components/PageTitle';
import MDXContainer from '../components/MDXContainer';
import SEO from '../components/seo';
import TableOfContents from '../components/TableOfContents';
import {
  ContributingGuidelines,
  Layout,
  SimpleFeedback,
} from '@newrelic/gatsby-theme-newrelic';
import toString from 'mdast-util-to-string';
import DefaultRelatedContent from '../components/DefaultRelatedContent';

const BasicDoc = ({ data }) => {
  const { mdx } = data;
  const {
    mdxAST,
    frontmatter,
    body,
    fields: { fileRelativePath, slug },
  } = mdx;

  const moreHelpExists = mdxAST.children.find(
    (node) => node.type === 'heading' && toString(node) === 'For more help'
  );

  return (
    <>
      <SEO title={frontmatter.title} />
      <div
        css={css`
          display: grid;
          grid-template-areas:
            'page-title page-title'
            'content page-tools';
          grid-template-columns: minmax(0, 1fr) 320px;
          grid-column-gap: 2rem;

          @media screen and (max-width: 1240px) {
            grid-template-areas:
              'page-title'
              'content';
            grid-template-columns: minmax(0, 1fr);
          }
        `}
      >
        <PageTitle>{frontmatter.title}</PageTitle>
        <Layout.Content>
          <MDXContainer body={body}>
            {moreHelpExists ? null : <DefaultRelatedContent />}
          </MDXContainer>
        </Layout.Content>
        <Layout.PageTools
          css={css`
            @media screen and (max-width: 1240px) {
              display: none;
            }
          `}
        >
          <ContributingGuidelines fileRelativePath={fileRelativePath} />
          <TableOfContents page={mdx} />
          <SimpleFeedback
            title={frontmatter.title}
            slug={slug}
            labels={['content', 'feedback']}
          />
        </Layout.PageTools>
      </div>
    </>
  );
};

BasicDoc.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      mdxAST
      body
      frontmatter {
        title
      }
      fields {
        fileRelativePath
        slug
      }
      ...TableOfContents_page
    }
    ...MainLayout_query
  }
`;

export default BasicDoc;
