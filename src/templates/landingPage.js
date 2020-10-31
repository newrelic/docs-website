import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MDXContainer from '../components/MDXContainer';
import SEO from '../components/seo';

const LandingPage = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  return (
    <>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <MDXContainer>{body}</MDXContainer>
    </>
  );
};

LandingPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $nav: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
    ...MainLayout_query
  }
`;

export default LandingPage;
