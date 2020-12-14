import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import PageTitle from '../components/PageTitle';
import MDXContainer from '../components/MDXContainer';
import SEO from '../components/seo';
import TableOfContents from '../components/TableOfContents';
import SimpleFeedback from '../components/SimpleFeedback';
import {
  ContributingGuidelines,
  Layout,
} from '@newrelic/gatsby-theme-newrelic';
import toString from 'mdast-util-to-string';
import DefaultRelatedContent from '../components/DefaultRelatedContent';

const BasicDoc = ({ data }) => {
  const { mdx, site } = data;
  const {
    mdxAST,
    frontmatter,
    body,
    fields: { fileRelativePath },
  } = mdx;

  const issueUrl = `${site.siteMetadata.repository}/issues/new`;
  const title = `Feedback+for:+${frontmatter.title.replace(' ', '+')}`;
  const labels = `eng,feedback`;
  const positiveFeedback = `${issueUrl}?labels=${labels},feedback-positive&title=${title}`;
  const negativeFeedback = `${issueUrl}?labels=${labels},feedback-negative&title=${title}`;

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
            positiveUrl={positiveFeedback}
            negativeUrl={negativeFeedback}
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
    site {
      siteMetadata {
        repository
      }
    }
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
