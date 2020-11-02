import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import MDXContainer from '../components/MDXContainer';
import SEO from '../components/seo';
import {
  ContributingGuidelines,
  PageTools,
} from '@newrelic/gatsby-theme-newrelic';

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
    }
    ...MainLayout_query
  }
`;

export default BasicDoc;
