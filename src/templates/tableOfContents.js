import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout } from '@newrelic/gatsby-theme-newrelic';
import PageTitle from '../components/PageTitle';
import SEO from '../components/seo';
import MDXContainer from '../components/MDXContainer';

const TableOfContentsPage = ({ data }) => {
  const {
    mdx: { body, frontmatter },
  } = data;

  return (
    <>
      <SEO title={frontmatter.title} />
      <PageTitle>{frontmatter.title}</PageTitle>
      <Layout.Content>
        <MDXContainer body={body} />
      </Layout.Content>
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

export default TableOfContentsPage;
