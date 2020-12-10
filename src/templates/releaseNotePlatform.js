import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout } from '@newrelic/gatsby-theme-newrelic';
import MDXContainer from '../components/MDXContainer';
import PageTitle from '../components/PageTitle';
import SEO from '../components/seo';

const releaseNotePlatformTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title } = frontmatter;
  return (
    <>
      <SEO title={title} />
      <PageTitle>{title}</PageTitle>
      <Layout.Content>
        <MDXContainer body={body} />
      </Layout.Content>
    </>
  );
};

releaseNotePlatformTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
    ...MainLayout_query
  }
`;

export default releaseNotePlatformTemplate;
