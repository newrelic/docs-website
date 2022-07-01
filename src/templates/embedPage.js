import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '@newrelic/gatsby-theme-newrelic';
import EmbedContext from '../components/EmbedContext';

const EmbedPage = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const { title } = frontmatter;

  return (
    <EmbedContext.Provider value={{ isEmbedded: true }}>
      <h1>{title}</h1>
      <Layout.Content>{body}</Layout.Content>
    </EmbedContext.Provider>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;

EmbedPage.propTypes = {
  data: PropTypes.object,
};

export default EmbedPage;
