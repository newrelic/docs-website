import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import MDXContainer from '../components/MDXContainer';

const TableOfContentsPage = ({ data }) => {
  const {
    mdx: { body, frontmatter },
  } = data;

  return (
    <>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <MDXContainer>{body}</MDXContainer>
    </>
  );
};

TableOfContentsPage.propTypes = {
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
